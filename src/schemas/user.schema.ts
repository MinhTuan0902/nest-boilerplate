import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseSchema } from './base.schema';

@Schema({ timestamps: true })
@ObjectType()
export class User extends BaseSchema {
  @Prop({ type: String })
  @Field(() => String)
  username: string;

  @Prop({ type: String })
  encryptedPassword: string;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
