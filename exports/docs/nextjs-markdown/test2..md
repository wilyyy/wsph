# PhotoGrid Component Documentation

The `PhotoGrid` component is a React functional component that renders a grid of photos.

## Usage

```javascript
import PhotoGrid from './PhotoGrid';

function App() {
  return (
    <div>
      <PhotoGrid />
    </div>
  );
}
```

## Props

This component does not accept any props.

## Example

In the following example, the `tempData` array contains twelve instances of the string 'photo'. The `PhotoGrid` component maps over this array and renders twelve buttons with the 'photo' text.

```javascript
import React from 'react';

const tempData = [
  'photo',
  'photo',
  'photo',
  'photo',
  'photo',
  'photo',
  'photo',
  'photo',
  'photo',
  'photo',
  'photo',
  'photo',
];

const PhotoGrid = () => {
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
};

export default PhotoGrid;
```

This will result in a grid with twelve buttons, each displaying the text 'photo'. The buttons have a yellow background, a height of 300 pixels, and a hover animation. The grid has twelve columns and a gap of 4 units between the items.