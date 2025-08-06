# React Emit Hooks Documentation

## Installation

Install the package via npm:

```bash
npm install react-emit-hooks
```

or via yarn:

```bash
yarn add react-emit-hooks
```

## Importing Hooks

```typescript
import { useEmit, useListen } from 'react-emit-hooks';
```

## Hooks Overview

### `useEmit`

Creates an event emitter function that dispatches custom events to the window object.

#### Parameters

| Parameter  | Type          | Required | Description                          |
| ---------- | ------------- | -------- | ------------------------------------ |
| `emitName` | `string`      | Yes      | The name of the event to emit        |
| `data`     | `T` (generic) | No       | Optional data to pass with the event |

#### Returns

Returns a function that, when called, emits the specified event with the provided data.

#### Example Usage

```typescript
import { useEmit } from 'react-emit-hooks';

function ButtonComponent() {
  const emitClick = useEmit('button-clicked', { id: 123, text: 'Submit' });

  return (
    <button onClick={emitClick}>
      Click Me
    </button>
  );
}
```

### `useListen`

Sets up an event listener for the specified event name and calls the callback when the event is received.

#### Parameters

| Parameter    | Type                | Required | Description                                                               |
| ------------ | ------------------- | -------- | ------------------------------------------------------------------------- |
| `listenName` | `string`            | Yes      | The name of the event to listen for                                       |
| `callback`   | `(data: T) => void` | Yes      | Function to call when event is received, with the event data as parameter |

#### Example Usage

```typescript
import { useListen } from 'react-emit-hooks';

function DisplayComponent() {
  useListen('button-clicked', (data) => {
    console.log('Button was clicked with data:', data);
    // Data will be { id: 123, text: 'Submit' } from the emit example
  });

  return <div>Listening for button clicks...</div>;
}
```

## Complete Example

Here's a complete example showing both hooks working together:

```typescript
import React from 'react';
import { useEmit, useListen } from 'react-emit-hooks';

const EmitterComponent = () => {
  const emitMessage = useEmit('user-message', {
    text: 'Hello from emitter!',
    timestamp: Date.now()
  });

  return (
    <div>
      <button onClick={emitMessage}>Send Message</button>
    </div>
  );
};

const ListenerComponent = () => {
  useListen('user-message', (data) => {
    console.log('Received message:', data);
    // Will log when EmitterComponent's button is clicked
  });

  return <div>Listening for messages...</div>;
};

const App = () => {
  return (
    <div>
      <EmitterComponent />
      <ListenerComponent />
    </div>
  );
};

export default App;
```

## TypeScript Support

The hooks are written in TypeScript and include generic type parameters:

```typescript
// With explicit type
useEmit<{ count: number }>('counter-update', { count: 5 });

// Type inferred from data
useListen<{ count: number }>('counter-update', (data) => {
  console.log(data.count); // correctly typed as number
});
```
