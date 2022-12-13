# react-use-access

React Access Area Library

[![Downloads](https://img.shields.io/npm/dm/@tam11a/react-use-access.svg)](https://www.npmjs.com/package/@tam11a/react-use-access) [![NPM](https://img.shields.io/npm/v/@tam11a/react-use-access.svg)](https://www.npmjs.com/package/@tam11a/react-use-access) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Flexible & extensible modules with development friendly flexibility to maintain the forbidden areas for different types of users in ReactJS.

## Table of contents

- [Getting started](#getting-started)
- [API](#api)

## Getting started

### Installation

```bash
npm install --save @tam11a/react-use-access
```

### Quick Start

First, you need to wrap the application or private layouts with `<AccessProvider>` then you are ready to use `<AccessMargin>` and other modules.

```jsx
const App = () => {
  const permissions = ["PRODUCT_VIEW", "PRODUCT_EDIT", "PRODUCT_DELETE"];

  return (
    <AccessProvider permissions={permissions}>
      <YourApplicationRoutes />
    </AccessProvider>
  );
};
```

Protect UI Component

```jsx
const Product = () => {
  return (
    <AccessMargin to="PRODUCT_DELETE">
      <button>Product Delete</button>
    </AccessMargin>
  );
};
```

Protect UI Component with multiple permissions

```jsx
const Product = ({ product }) => {
  return (
    <>
      <AccessMargin to={["PRODUCT_EDIT", "PRODUCT_VIEW"]}>
        <p>Product Name: {product.name}</p>
        <AccessMargin to="PRODUCT_EDIT">
          <button>Product Delete</button>
        </AccessMargin>
        <AccessMargin to="PRODUCT_DELETE">
          <button>Product Delete</button>
        </AccessMargin>
      </AccessMargin>
    </>
  );
};
```

Conditional render with useContext from Context API

```jsx
const { useAccess } = useAccessContext();

<button>
  {useAccess("PRODUCT_EDIT") ? "Edit Product" : "Product Preview"}
</button>;
```

## API

- [useAccess](#useAccess)
- [useAccessContext](#useAccessContext)
- [AccessMargin](#AccessMargin)
- [AccessProvider](#AccessProvider)
- [DefaultFallback](#DefaultFallback)

## - useAccess

Function to check if passed string or list of strings have permission.

### Arguments:

`permission` - `string | string[]`

Permission or Permission List to check for restriction

### Returns: `boolean`

#

## - useAccessContext

### Returns:

`permissions` - `string | string[]`

Current Permission List

`useAccess` - The [useAccess](#useaccess) Function

`addPermissions` - `function` to add new permissions with existing permissions

```jsx
const { addPermissions } = useAccessContext();

addPermissions("PRODUCT_UPDATE");
// or
addPermissions(["PRODUCT_UPDATE", "VIEW_PRODUCT_STATES"]);
```

`resetPermissions` - `function` to reset permissions with passed permissions or to default permissions the provider initialized with.

```jsx
const { resetPermissions } = useAccessContext();

resetPermissions(); // to reset default
// or
resetPermissions(["PRODUCT_UPDATE", "VIEW_PRODUCT_STATES"]); // to set only these permissions
```

`removePermissions` - `function` to add remove permission/permissions from existing permissions

```jsx
const { removePermissions } = useAccessContext();

removePermissions("PRODUCT_UPDATE");
// or
removePermissions(["PRODUCT_UPDATE", "VIEW_PRODUCT_STATES"]);
```

`defaultFallback` - `React.ReactNode`

The fallback component.

#

## - AccessMargin

Wrapper to restrict areas or components.

### Props:

`to` - `string | string[]`

Permission or Permission List for the Margin to check the wrapped areas restriction

`defaultFallback` - `boolean`

To call the default fallback if the area is restricted

`fallback` - `React.ReactNode`

To add customised fallback if the area is restricted

#

## - AccessProvider

Context Provider for the Context the entire module is using. you need to wrap the application or private layouts with `<AccessProvider>` to use other modules.

### Props:

`permissions` - `string | string[]`

Default Permission or Permission List

`fallback` - `React.ReactNode`

To set customised fallback for the default fallback view when the defaultFallback is called in `<AccessMargin>`, `<DefaultFallback />` and on other necessities.

#

## - DefaultFallback

The default fallback component.

#

### License

N/A © [tam11a](https://github.com/tam11a)
