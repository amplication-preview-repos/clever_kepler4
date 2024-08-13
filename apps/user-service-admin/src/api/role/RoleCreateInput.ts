import { UserRoleCreateNestedManyWithoutRolesInput } from "./UserRoleCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  name?: string | null;
  userRoles?: UserRoleCreateNestedManyWithoutRolesInput;
};
