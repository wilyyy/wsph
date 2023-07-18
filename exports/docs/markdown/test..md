### Component Description:

The `AccessibleButton` component is a reusable button component that can be used to render accessible buttons in a React application. It supports toggling between light and dark theme and can also display an optional icon.

### Usage:

To use the `AccessibleButton` component, import it and use it in your React code as follows:

```javascript
import { useTheme } from "../../lib/ContextHooks";
import AccessibleButton from "./AccessibleButton";

// Inside your component
const MyComponent = () => {
   const handleClick = () => {
      // Handle button click
   };

   return (
      <div>
         <AccessibleButton
            icon={/* Insert your icon component here */}
            onButtonClick={handleClick}
            isToggleThemeSwitch={true} // Set to true if this button should toggle theme
         >
            Button Text
         </AccessibleButton>
      </div>
   );
};
```

### Props:

The `AccessibleButton` component accepts the following props:

- `children` (React.ReactNode): The content to be rendered inside the button.
- `icon` (any, optional): The icon component to be displayed alongside the button text.
- `onButtonClick` (React.MouseEventHandler, optional): The event handler function to be called when the button is clicked.
- `isToggleThemeSwitch` (boolean, optional): Controls whether the button should toggle between light and dark theme.

### Component Implementation:

The `AccessibleButton` component is implemented as follows:

```javascript
import React from "react";
import { useTheme } from "../../lib/ContextHooks";

type Props = {
   children: React.ReactNode;
   icon?: any;
   onButtonClick?: React.MouseEventHandler;
   isToggleThemeSwitch?: boolean;
};

type ButtonColors = {
   buttonColor: string;
   textColor: string;
};

export default function AccessibleButton({
   children,
   icon,
   onButtonClick,
   isToggleThemeSwitch,
}: Props): JSX.Element {
   const { theme, setTheme } = useTheme();

   const ToggleSiteTheme = () => {
      theme === "light" ? setTheme("dark") : setTheme("light");
   };

   const colors: Record<string, ButtonColors> = {
      light: {
         buttonColor: "bg-black",
         textColor: "text-white",
      },
      dark: {
         buttonColor: "bg-white",
         textColor: "text-black",
      },
   };

   return (
      <button
         className={`${colors[theme].buttonColor} ${colors[theme].textColor} h-[fit-content] w-[fit-content] font-bold p-2 rounded after:content-['_↗']`}
         onClick={isToggleThemeSwitch ? ToggleSiteTheme : onButtonClick}
      >
         {children}
      </button>
   );
}
```

In this implementation, the `AccessibleButton` component renders a `<button>` element. The styling of the button is determined based on the current theme, which is obtained using the `useTheme` hook. The `ToggleSiteTheme` function is called when the button is clicked and it toggles the site theme between "light" and "dark" by calling the `setTheme` function provided by the `useTheme` hook. The button's colors are defined using a `colors` object and are dynamically applied based on the current theme.