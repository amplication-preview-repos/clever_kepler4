import { UserRoleUpdateManyWithoutRolesInput } from "./UserRoleUpdateManyWithoutRolesInput";

export type RoleUpdateInput = {
  name?: string | null;
  userRoles?: UserRoleUpdateManyWithoutRolesInput;
};
