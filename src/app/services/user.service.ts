import { IUserCreateDto, User } from "@/app/models/user";

export const regiterUser = async (userData: IUserCreateDto) => {
  return await User.query().insert({
    email: userData.email,
    password: userData.password,
  });
};
