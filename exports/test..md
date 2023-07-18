## AccessibleButton Component

### Overview
The `AccessibleButton` component is a reusable button component that can be customized based on the theme and other properties passed as props.

### Usage

```js
import { useTheme } from "../../lib/ContextHooks";
import AccessibleButton from "./AccessibleButton";

const MyComponent = () => {
  const handleClick = () => {
    // handle button click event
  };

  return (
    <div>
      <AccessibleButton onButtonClick={handleClick}>Click Me</AccessibleButton>
    </div>
  );
};
```

### Props

| Name                   | Type                     | Description                                            |
| -----------------------| ------------------------ | ------------------------------------------------------ |
| children               | React.ReactNode         | The content of the button.                              |
| icon                   | any                      | The icon to be displayed in the button.                 |
| onButtonClick          | React.MouseEventHandler | The event handler for button click.                     |
| isToggleThemeSwitch     | boolean                  | Flag indicating whether the button is a theme switch.   |

### CSS Classes

The `AccessibleButton` component applies the following CSS classes to the button element based on the theme:

- `bg-black` and `bg-white` for the button background color in the `light` and `dark` themes respectively.
- `text-white` and `text-black` for the button text color in the `light` and `dark` themes respectively.
- `h-[fit-content]` and `w-[fit-content]` for setting the height and width of the button based on its content.
- `font-bold` for applying bold font weight to the button text.
- `p-2` for adding padding around the button.
- `rounded` for applying rounded corners to the button.
- `after:content-['_↗']` for adding an arrow icon after the button content.

### Hooks

The `AccessibleButton` component uses the `useTheme` hook from the `ContextHooks` module to access and update the theme.

### Example

```jsx
import { useTheme } from "../../lib/ContextHooks";
import AccessibleButton from "./AccessibleButton";

const MyComponent = () => {
  const { theme, setTheme } = useTheme();

  const toggleSiteTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div>
      <AccessibleButton
        onButtonClick={toggleSiteTheme}
        isToggleThemeSwitch={true}
      >
        Toggle Theme
      </AccessibleButton>
    </div>
  );
};
```