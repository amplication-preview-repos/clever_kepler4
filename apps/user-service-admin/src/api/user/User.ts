import { JsonValue } from "type-fest";
import { UserRole } from "../userRole/UserRole";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  userRoles?: Array<UserRole>;
  username: string;
};
