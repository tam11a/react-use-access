import { IPermission } from "./types";
import { useAccessContext } from "./useAccessContext";

export const checkAccess = (permission: IPermission | IPermission[]) => {
  const { checkAccess: check } = useAccessContext();
  return check(permission);
};
