import { InputJsonValue } from "../../types";
import { UserRoleUpdateManyWithoutUsersInput } from "./UserRoleUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  userRoles?: UserRoleUpdateManyWithoutUsersInput;
  username?: string;
};
