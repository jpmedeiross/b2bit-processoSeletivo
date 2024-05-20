import { Avatar } from "./Avatar";

export type User = {
  id: string | number;
  avatar: Avatar;
  name: string;
  is_active: boolean;
  email: string;
  type: string;
  created: string;
  modified: string;
  role: string;
};