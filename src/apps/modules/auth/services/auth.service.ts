import { UserService } from '@api/users/services';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@schemas/user.schema';
import { EnvVariable } from '@shared/enums';
import { EnvService } from '@shared/modules/env/env.service';
import {
  RegisteredUsernameError,
  UnregisteredUsernameError,
  WrongPasswordError,
} from '../errors';
import { comparePassword } from '../helpers';
import { LoginInput, RegisterInput } from '../inputs';
import { JWTData } from '../interfaces';
import { AuthData } from '../types';

@Injectable()
export class AuthService {
  constructor(
    private readonly envService: EnvService,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login({ username, password }: LoginInput): Promise<AuthData> {
    const user = await this.userService.findOneUser({
      username_equal: username,
    });
    if (!user) {
      throw new UnregisteredUsernameError();
    }

    if (!comparePassword(password, user.encryptedPassword)) {
      throw new WrongPasswordError();
    }

    return this.createAuthData(user);
  }

  async register(input: RegisterInput): Promise<AuthData> {
    const { username } = input;
    const isRegisteredUsername = await this.userService.findOneUser({
      username_equal: username,
    });
    if (!isRegisteredUsername) {
      throw new RegisteredUsernameError();
    }

    const newUser = await this.userService.createOneUser(input);

    return this.createAuthData(newUser);
  }

  createAuthData({ _id }: User): AuthData {
    const payload: JWTData = {
      uid: _id,
    };

    // TODO: Refactor
    return {
      accessToken: {
        token: this.jwtService.sign(payload, {
          expiresIn: +this.envService.get(
            EnvVariable.JWTAccessTokenExpirationTime,
          ),
        }),
        expiresAt: new Date(
          new Date().getTime() +
            +this.envService.get(EnvVariable.JWTAccessTokenExpirationTime),
        ),
      },
      refreshToken: {
        token: this.jwtService.sign(payload, {
          expiresIn: +this.envService.get(
            EnvVariable.JWTRefreshTokenExpirationTime,
          ),
        }),
        expiresAt: new Date(
          new Date().getTime() +
            +this.envService.get(EnvVariable.JWTRefreshTokenExpirationTime),
        ),
      },
    };
  }
}
