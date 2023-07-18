## Documentation for PhotoGrid Component

### Description
The `PhotoGrid` component displays a grid of photos using the data provided in `tempData`. Each photo is displayed as a button with a yellow background and a height of 300px. The grid layout is defined using the CSS grid system with 12 columns and a gap of 4 units between each item.

### Code

```jsx
import React from "react";

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

### Usage
To use the `PhotoGrid` component, follow these steps:

1. Import the `PhotoGrid` component from the appropriate source file.
2. Place the `<PhotoGrid />` tag in the desired location within your JSX code.

### Props

The `PhotoGrid` component does not accept any props.

### Example

```jsx
import React from "react";
import PhotoGrid from "./components/PhotoGrid";

function App() {
   return (
      <div>
         ...
         <PhotoGrid />
         ...
      </div>
   );
}

export default App;
```

In the example above, the `PhotoGrid` component is imported and used within the `App` component.