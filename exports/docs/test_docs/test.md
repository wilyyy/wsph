# Documentation for `AccessibleButton` Component

The `AccessibleButton` component is a reusable button component that provides accessibility features and supports theming. It is imported from the `ContextHooks` module located in the `lib` directory.

## Usage

To use the `AccessibleButton` component, import it using the following syntax:

```javascript
import { useTheme } from '../../lib/ContextHooks';
```

The `AccessibleButton` component accepts the following props:

- `children` (required): The content to be displayed inside the button.
- `icon` (optional): An optional icon to be displayed alongside the button content.
- `onButtonClick` (optional): An optional event handler function to be called when the button is clicked.
- `isToggleThemeSwitch` (optional): A boolean value indicating whether the button should toggle the site theme when clicked.

## Example

Here's an example of how to use the `AccessibleButton` component:

```javascript
import { useTheme } from '../../lib/ContextHooks';
import AccessibleButton from './AccessibleButton';

const MyComponent = () => {
  const handleButtonClick = () => {
    // Handle button click event
  };

  return (
    <div>
      <AccessibleButton onButtonClick={handleButtonClick} isToggleThemeSwitch={true}>
        Click me!
      </AccessibleButton>
    </div>
  );
};
```

In the example above, the `AccessibleButton` component is rendered with the text "Click me!" inside the button. When the button is clicked, the `handleButtonClick` function will be called.

## Theming

The `AccessibleButton` component supports theming based on the current site theme. The theme is managed using the `useTheme` hook from the `ContextHooks` module.

The button's appearance is determined by the current theme, which can be either "light" or "dark". The theme is set using the `setTheme` function returned by the `useTheme` hook.

The button colors for each theme are defined in the `colors` object within the `AccessibleButton` component. The `buttonColor` property specifies the background color of the button, while the `textColor` property specifies the text color.

By default, the button is styled based on the current theme. However, if the `isToggleThemeSwitch` prop is set to `true`, the button will toggle the site theme when clicked, using the `ToggleSiteTheme` function.

## Styling

The `AccessibleButton` component applies the following styles:

- `h-[fit-content]`: Sets the height of the button to fit its content.
- `w-[fit-content]`: Sets the width of the button to fit its content.
- `font-bold`: Applies a bold font weight to the button text.
- `p-2`: Adds padding of 2 units to the button.
- `rounded`: Rounds the corners of the button.
- `after:content-['_↗']`: Adds a content after the button text, represented by the arrow symbol "↗".

The button's background color and text color are determined by the current theme, as explained in the Theming section.

## Summary

The `AccessibleButton` component is a versatile button component that provides accessibility features and supports theming. It can be easily customized and integrated into any React application.