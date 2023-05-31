import * as bcrypt from 'bcrypt';

export const encryptPassword = (password: string): string => {
  return bcrypt.hashSync(password, 10);
};

export const comparePassword = (
  password: string,
  encryptedPassword: string,
): boolean => {
  return bcrypt.compareSync(password, encryptedPassword);
};
