import React from "react";
import { IAccessContext, IAccessProvider, IPermission } from "./types";

/**
 * Creating AccessContext using React Context API
 */
const AccessContext = React.createContext<IAccessContext>({
  permissions: [],
  useAccess: () => false,
  addPermissions: () => {},
  resetPermissions: () => {},
  removePermissions: () => {},
  defaultFallback: null,
});
export const useAccessContext = () =>
  React.useContext<IAccessContext>(AccessContext);

export const AccessProvider: React.FC<React.PropsWithChildren<
  IAccessProvider
>> = ({ permissions, children, fallback }) => {
  /**
   * Permission List
   *
   */
  const [permissionList, setPermissionList] = React.useState<IPermission[]>(
    permissions || []
  );

  const useAccess = (permission: IPermission | IPermission[]) =>
    typeof permission === "string"
      ? permissionList.includes(permission)
      : permission.some(p => permissionList.includes(p));

  return (
    <AccessContext.Provider
      value={{
        permissions: permissionList,
        /**
         * Check permissions
         */
        useAccess,
        /**
         * Add permission or a list of permission to the permissions list
         */
        addPermissions: permission =>
          setPermissionList(p => {
            let temp = p.concat(
              typeof permission === "string" ? [permission] : permission
            );
            return temp.filter((x, index) => index === temp.indexOf(x));
          }),
        /**
         * reset permissions with new list of permissions or to the default permissions
         */
        resetPermissions: newPermissions =>
          setPermissionList(newPermissions || permissions || []),
        /**
         * Remove permission or a list of permission from the permissions list
         */
        removePermissions: permission =>
          setPermissionList(p =>
            typeof permission === "string"
              ? p.filter(per => per !== permission)
              : p.filter(per => !permission.includes(per))
          ),
        defaultFallback: fallback,
      }}
    >
      {children}
    </AccessContext.Provider>
  );
};
