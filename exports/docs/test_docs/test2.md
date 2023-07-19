# PhotoGrid Documentation

## Description
This component represents a grid layout displaying a series of photos. It takes an array of photo data and renders a button for each photo.

## Usage
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

function PhotoGrid() {
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

export default PhotoGrid;
```

## Props
This component does not accept any props.

## Example
To use this component, create an array with the photo data and pass it to the `tempData` variable. Then, include the `PhotoGrid` component in your JSX code.

```javascript
import React from 'react';
import PhotoGrid from './PhotoGrid';

const photos = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg'];

function App() {
  return (
    <div>
      <h1>My Photo Grid</h1>
      <PhotoGrid photos={photos} />
    </div>
  );
}

export default App;
```