import React from 'react';

export type IPermission = string;

export type IAccessContext = {
	permissions: IPermission[];
	useAccess: (permission: IPermission| IPermission[]) => boolean;
	addPermissions: (permission: IPermission | IPermission[]) => void;
	resetPermissions: (permission?: IPermission[]) => void;
	removePermissions: (permission: IPermission | IPermission[]) => void;
	defaultFallback: React.ReactNode;
};

export type IAccessProvider = {
	permissions?: IPermission[];
	children: React.ReactNode;
	fallback?: React.ReactNode;
};

export type IAccessMargin = {
	to: IPermission | IPermission[];
	defaultFallback?: boolean;
	fallback?: React.ReactNode;
};