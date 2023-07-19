# Documentation for `AccessibleButton` component

The `AccessibleButton` component is a reusable button component that provides accessibility features and supports theming. It is imported from the `ContextHooks` module located in the `lib` directory.

## Props

The `AccessibleButton` component accepts the following props:

- `children` (required): A React node representing the content of the button.
- `icon` (optional): An icon element to be displayed alongside the button content.
- `onButtonClick` (optional): A callback function to be executed when the button is clicked.
- `isToggleThemeSwitch` (optional): A boolean value indicating whether the button should toggle the site theme when clicked.

## ButtonColors

The `ButtonColors` type is an object that defines the colors for the button in different themes. It has the following properties:

- `buttonColor`: A string representing the background color of the button.
- `textColor`: A string representing the text color of the button.

## Usage

To use the `AccessibleButton` component, import it using the following syntax:

```javascript
import { useTheme } from '../../lib/ContextHooks';
```

Then, you can use the component in your code as follows:

```javascript
<AccessibleButton
  icon={/* optional icon element */}
  onButtonClick={/* optional callback function */}
  isToggleThemeSwitch={/* optional boolean value */}
>
  {/* button content */}
</AccessibleButton>
```

The `AccessibleButton` component will automatically apply the appropriate colors based on the current theme. The theme is determined by the `useTheme` hook from the `ContextHooks` module.

If the `isToggleThemeSwitch` prop is set to `true`, clicking the button will toggle the site theme between "light" and "dark". Otherwise, the `onButtonClick` callback function will be executed when the button is clicked.

## Code Summary

The `AccessibleButton` component is a reusable button component that supports theming and accessibility features. It accepts props for customizing the button's appearance and behavior. The button's colors are determined based on the current theme, which is managed using the `useTheme` hook from the `ContextHooks` module.