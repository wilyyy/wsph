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

To use the `AccessibleButton` component, you need to import it and use it in your code. Here's an example:

```jsx
import { useTheme } from '../../lib/ContextHooks';
import AccessibleButton from '../../components/AccessibleButton';

const MyComponent = () => {
  const { theme, setTheme } = useTheme();

  const handleButtonClick = () => {
    // Handle button click event
  };

  return (
    <div>
      <AccessibleButton
        icon={<IconComponent />}
        onButtonClick={handleButtonClick}
        isToggleThemeSwitch={true}
      >
        Button Text
      </AccessibleButton>
    </div>
  );
};
```

In the example above, the `AccessibleButton` component is used within the `MyComponent` component. The `useTheme` hook is used to access the current theme and the `setTheme` function to update the theme. The button has an optional icon, a click event handler, and the `isToggleThemeSwitch` prop is set to `true` to enable theme toggling.

The button's appearance is determined by the current theme. The `colors` object defines the button colors for the `light` and `dark` themes.

## Summary

The `AccessibleButton` component is a versatile button component that supports accessibility and theming. It can be used to create buttons with different functionalities and appearances based on the current theme.