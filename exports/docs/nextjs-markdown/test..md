# AccessibleButton

A reusable button component that supports theming and accessibility features. The `AccessibleButton` component is implemented using React and the `useTheme` hook from the `ContextHooks` module.

## Import

To use the `AccessibleButton` component, you need to import it as shown below:

```jsx
import { useTheme } from '../../lib/ContextHooks';
```

## Props

The `AccessibleButton` component accepts the following props:

### Props

- `children` (React.ReactNode): The content to be displayed inside the button. It can be any valid React element or a string.

- `icon` (any, optional): Placeholder prop for an icon. The type of the icon is yet to be determined.

- `onButtonClick` (React.MouseEventHandler, optional): Event handler for the button click event. It takes a `MouseEvent` object as an argument.

- `isToggleThemeSwitch` (boolean, optional): Specifies whether the button should toggle the site theme. When set to `true`, the `ToggleSiteTheme` function will be invoked on button click.

## Functionality

The `AccessibleButton` component utilizes the `useTheme` hook from the `ContextHooks` module to access the current theme and change it if required.

The component provides a `ToggleSiteTheme` function that toggles the site theme between "light" and "dark" when called. It updates the theme value using the `setTheme` function from the `useTheme` hook.

The button's appearance and behavior are determined by the current theme. The `colors` object stores the button's background color and text color mappings for each theme.

The `AccessibleButton` component renders a `<button>` element with the following properties:

- `className` - The class name is dynamically generated based on the current theme. It combines the button color and text color classes from the `colors` object with additional classes for font, padding, border radius, and content after.

- `onClick` - The `onClick` event handler is set to either the `ToggleSiteTheme` function or the `onButtonClick` prop based on the value of `isToggleThemeSwitch`.

## Usage

To use the `AccessibleButton` component, place the component in your JSX code as follows:

```jsx
<AccessibleButton
  icon={/* optional icon */}
  onButtonClick={/* optional event handler */}
  isToggleThemeSwitch={/* optional boolean */}>
  {/* Button Content */}
</AccessibleButton>
```