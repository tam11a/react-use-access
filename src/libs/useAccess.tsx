import { IPermission } from "./types";
import { useAccessContext } from "./useAccessContext";

export const useAccess = (permission: IPermission | IPermission[]) => {
	const { useAccess: checkAccess } = useAccessContext();
	return checkAccess(permission);
};
