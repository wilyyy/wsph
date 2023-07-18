# PhotoGrid Component

This is a React component that renders a grid of buttons displaying "photo" text.

## Usage

Import the `PhotoGrid` component:

```javascript
import PhotoGrid from './PhotoGrid';
```

Render the `PhotoGrid` component:

```jsx
<PhotoGrid />
```

## Props

The `PhotoGrid` component does not accept any props.

## Example

```jsx
import React from 'react';
import PhotoGrid from './PhotoGrid';

function App() {
    return (
        <div>
            <h1>My Photo Grid</h1>
            <PhotoGrid />
        </div>
    );
}

export default App;
```

## Component Description

The `PhotoGrid` component uses the `tempData` array to generate a grid of buttons. Each button has a height of 300px and spans 3 columns. The `tempData` array contains multiple "photo" strings.

## Implementation Details

The `PhotoGrid` component renders a `div` element with the class `grid` and `grid-cols-12`. It also has a gap of 4 between each grid item. The `tempData` array is mapped to create a button for each element. Each button has a background color of yellow-500 and a hover effect that translates the button 2 pixels up. The `photo` string is displayed inside each button.

### Example

```jsx
import React from 'react';

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