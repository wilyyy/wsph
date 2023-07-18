# Documentation - PhotoGrid Component

This documentation provides an overview of the `PhotoGrid` component and its usage.

## Code

```javascript
const tempData = [
   "photo",
   "photo",
   "photo",
   "photo",
   "photo",
   "photo",
   "photo",
   "photo",
   "photo",
   "photo",
   "photo",
   "photo",
];

export default function PhotoGrid() {
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
}
```

## Description

The `PhotoGrid` component is a React functional component that displays a grid of photos. It utilizes the `tempData` array to generate buttons for each photo. The grid layout is defined using Tailwind CSS classes.

## Usage

To use the `PhotoGrid` component, you need to import it into your project and render it wherever you want to display the photo grid.

```jsx
import PhotoGrid from './path/to/PhotoGrid';

function App() {
   return (
      <div>
         {/* Other components */}
         <PhotoGrid />
         {/* Other components */}
      </div>
   );
}
```

## Props

The `PhotoGrid` component does not accept any props.