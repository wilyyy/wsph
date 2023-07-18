## AccessibleButton Component

The `AccessibleButton` component is a reusable button component that can be customized based on the theme and other optional properties.

### Usage

```jsx
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

### Props

- `children`: React.ReactNode - The content to be rendered inside the button.
- `icon` (optional): any - The icon to be displayed next to the button text. (Not implemented yet)
- `onButtonClick` (optional): React.MouseEventHandler - The event handler function to be called when the button is clicked.
- `isToggleThemeSwitch` (optional): boolean - If true, clicking the button will toggle between light and dark theme.

### Hooks

- `useTheme()`: This hook returns the current theme and a function to change the theme. It is used to access the theme context within the `AccessibleButton` component.

### Button Colors

The button colors are defined based on the theme. The available themes and their corresponding color values are:

- `light`:
   - `buttonColor`: "bg-black"
   - `textColor`: "text-white"
- `dark`:
   - `buttonColor`: "bg-white"
   - `textColor`: "text-black"

### Styling

The button is styled using tailwind CSS classes based on the current theme. The following tailwind classes are applied to the button:

- `buttonColor`: Determines the background color of the button based on the current theme.
- `textColor`: Determines the text color of the button based on the current theme.
- `h-[fit-content]`: Sets the height of the button to fit its content.
- `w-[fit-content]`: Sets the width of the button to fit its content.
- `font-bold`: Sets the font weight of the button to bold.
- `p-2`: Adds padding to the button.
- `rounded`: Rounds the corners of the button.
- `after:content-['_↗']`: Adds a content after the button text in the shape of an arrow pointing upwards and to the right.

### Theme Toggle

If the `isToggleThemeSwitch` prop is set to true, clicking the button will toggle the theme between light and dark. The current theme is determined by the `theme` obtained from the `useTheme` hook. When the button is clicked, the `ToggleSiteTheme` function is called, which checks the current theme and sets the opposite theme using the `setTheme` function from the `useTheme` hook.

