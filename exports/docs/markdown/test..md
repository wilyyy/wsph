# AccessibleButton Documentation

The `AccessibleButton` component is a reusable button component with support for theming and accessibility. It is used to create accessible buttons in React applications.

## Usage

To use the `AccessibleButton` component, follow these steps:

1. Import the `useTheme` hook from the `ContextHooks` module:

   ```javascript
   import { useTheme } from "../../lib/ContextHooks";
   ```

2. Define the props for the `AccessibleButton` component:

   ```javascript
   type Props = {
      children: React.ReactNode;
      icon?: any; // Not defined yet
      onButtonClick?: React.MouseEventHandler;
      isToggleThemeSwitch?: boolean;
   };
   ```

   - `children` (required) - The content inside the button.
   - `icon` - An optional icon to be displayed with the button.
   - `onButtonClick` - An optional callback function to be executed when the button is clicked.
   - `isToggleThemeSwitch` - A flag indicating whether the button should be used as a theme switch.

3. Define the button colors for different themes:

   ```javascript
   type ButtonColors = {
      buttonColor: string;
      textColor: string;
   };
   ```

4. Create the `AccessibleButton` component:

   ```javascript
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

## Props

The `AccessibleButton` component accepts the following props:

- `children` (required): The content inside the button.
- `icon` (optional): An optional icon to be displayed with the button.
- `onButtonClick` (optional): An optional callback function to be executed when the button is clicked.
- `isToggleThemeSwitch` (optional): A flag indicating whether the button should be used as a theme switch.

## Theming

The `AccessibleButton` component supports theming based on the current theme provided by the `useTheme` hook. The button colors are defined using the `ButtonColors` type, and different color values can be assigned for different themes.

By default, the button colors are defined for the "light" and "dark" themes. The button color and text color are determined based on the current theme.

When `isToggleThemeSwitch` is set to `true`, clicking the button will toggle between the "light" and "dark" themes by calling the `setTheme` function provided by the `useTheme` hook.