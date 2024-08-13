import { UserRole } from "../userRole/UserRole";

export type Role = {
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
  userRoles?: Array<UserRole>;
};
