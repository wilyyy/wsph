# PhotoGrid Component

The `PhotoGrid` component is a functional component that renders a grid of buttons, each representing a photo. It uses a constant array named `tempData` to generate the buttons.

## Usage

To use the `PhotoGrid` component, follow these steps:

1. Import the `PhotoGrid` component:

```javascript
import PhotoGrid from './PhotoGrid';
```

2. Add the `PhotoGrid` component to your React component:

```javascript
function App() {
   return (
      <div>
         <h1>My Photo Grid</h1>
         <PhotoGrid />
      </div>
   );
}
```

3. Customize the `tempData` array to include the desired photos:

```javascript
const tempData = [
   "photo1",
   "photo2",
   "photo3",
   // Add more photos here
];
```

## Props

The `PhotoGrid` component does not accept any props.

## Implementation Details

The `PhotoGrid` component renders a `<div>` element with the class name "grid grid-cols-12 gap-4". Inside this `<div>`, it maps through the `tempData` array and generates a button for each element. The buttons have the following styles applied:

- Background color: yellow-500
- Height: 300px
- Column span: 3
- Transition: ease-in-out
- Hover effect: translateY(-2px)

```jsx
return (
   <div className="grid grid-cols-12 gap-4">
      {tempData.map((photo, index) => (
         <button
            className="bg-yellow-500 h-[300px] col-span-3 transition ease-in-out hover:-translate-y-2"
            key={index}
         >
            {photo}
         </button>
      ))}
   </div>
);
```

Note: This documentation assumes that the code is being used in a React environment with appropriate dependencies installed.