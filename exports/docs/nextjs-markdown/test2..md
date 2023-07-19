## PhotoGrid Component

The `tempData` array is declared as a constant with the following values:

```javascript
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
```

The `PhotoGrid` component renders a grid layout with 12 columns and a gap of 4 units. It utilizes the `tempData` array to generate a series of buttons representing photos. Each button has a fixed height of 300 pixels, spans 3 columns, and applies a transition effect on hover.

```javascript
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