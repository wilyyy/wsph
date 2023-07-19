## Importing the Hook

To use the `useTheme` hook from the `ContextHooks` module, import it using the following code:

```javascript
import { useTheme } from '../../lib/ContextHooks';
```

## Props

The `AccessibleButton` component accepts the following props:

### children

- Type: `React.ReactNode`
- Required: Yes
- Description: The content to be rendered inside the button.

### icon

- Type: `any` (to be determined)
- Required: No
- Description: The icon to be displayed alongside the button. (The desired icon type is yet to be determined.)

### onButtonClick

- Type: `React.MouseEventHandler`
- Required: No
- Description: The event handler function to be called when the button is clicked.

### isToggleThemeSwitch

- Type: `boolean`
- Required: No
- Description: If set to `true`, the button will toggle the site theme when clicked. If `false` (or not provided), the `onButtonClick` event handler will be called instead.

## Functionality

The `AccessibleButton` component renders a button that is accessible and theme-aware. It automatically updates the button's style based on the current theme. By default, it applies a style for light and dark themes.

The component uses the `useTheme` hook to access the theme and the `setTheme` function to update it.

When the button is clicked and `isToggleThemeSwitch` is set to `true`, it will toggle the site theme between "light" and "dark". If `isToggleThemeSwitch` is `false` or not provided, the `onButtonClick` event handler will be called instead.

## Button Colors

The button colors are defined based on the current theme. The colors for each theme are stored in the `colors` object. The structure of the `colors` object is as follows:

```javascript
const colors: Record<string, ButtonColors> = {
  light: {
    buttonColor: 'bg-black',
    textColor: 'text-white',
  },
  dark: {
    buttonColor: 'bg-white',
    textColor: 'text-black',
  },
};
```

The `buttonColor` property stores the CSS class for the button's background color, and the `textColor` property stores the CSS class for the button's text color.

## Example Usage

Here's an example of how to use the `AccessibleButton` component:

```javascript
<AccessibleButton
  icon={/* icon element */}
  onButtonClick={handleButtonClick}
  isToggleThemeSwitch={true}
>
  Click Me
</AccessibleButton>
```

In this example, the button will display an icon alongside the "Click Me" text. When clicked, it will toggle the site theme.