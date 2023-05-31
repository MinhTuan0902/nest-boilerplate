import { Types } from 'mongoose';

export const createObjectId = (id?: string): Types.ObjectId =>
  new Types.ObjectId(id || undefined);
