import React from "react";
import { DefaultFallback } from "./DefaultFallback";
import { IAccessMargin } from "./types";
import { useAccess } from "./useAccess";

const AccessMargin: React.FC<React.PropsWithChildren<IAccessMargin>> = ({
	to,
	children,
	defaultFallback,
	fallback,
}) => {
	if (useAccess(to)) return <>{children}</>;
	if (fallback) return <>{fallback}</>;
	if (defaultFallback) return <DefaultFallback />;
	return null;
};

export default AccessMargin;
