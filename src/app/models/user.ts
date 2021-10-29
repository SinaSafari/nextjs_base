import { Model } from "objection";

export interface IUserCreateDto {
  email: string;
  password: string;
}

export interface IUserDto extends IUserCreateDto {
  id: number;
}

export class User extends Model {
  static get tableName() {
    return "users";
  }
}
