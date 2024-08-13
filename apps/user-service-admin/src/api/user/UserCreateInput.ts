import { InputJsonValue } from "../../types";
import { UserRoleCreateNestedManyWithoutUsersInput } from "./UserRoleCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  userRoles?: UserRoleCreateNestedManyWithoutUsersInput;
  username: string;
};
