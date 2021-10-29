import { regiterUser } from "@/app/services/user.service";
import { IUserCreateDto } from "../models/user";

export const RegisterController = async (userData: IUserCreateDto) => {
  return await regiterUser(userData);
};
