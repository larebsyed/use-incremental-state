# Use-Incremental-State
Use-Incremental-State is an npm package that provides a React hook based on useState to allow for easy management of incremental state variables. This package is useful when you need to manage state variables that are incremented or decremented frequently, such as counters, progress bars, or pagination.
## Installation
To install Use-Incremental-State, run the following command:
npm install larebsyed/use-incremental-state
## Usage
To use Use-Incremental-State in your React project, import the useIncrementalState hook from the package:
import { useIncrementalState } from 'use-incremental-state';
Then, use the useIncrementalState hook in your component to manage the incremental state variable:
function MyComponent() {
  const [count, incrementCount, decrementCount] = useIncrementalState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
}
In the example above, the useIncrementalState hook is used to manage the count state variable, which is initialized to 0. The incrementCount and decrementCount functions returned by the hook can be used to increment or decrement the count variable, respectively.
## API
The useIncrementalState hook returns an array with three elements:
const [state, increment, decrement] = useIncrementalState(initialValue, step = 1);
• state: the current value of the incremental state variable.
• increment: a function that increments the state variable by the specified step (default is 1).
• decrement: a function that decrements the state variable by the specified step (default is 1).
## Example
Here's an example of using Use-Incremental-State to manage a progress bar:
import { useIncrementalState } from 'use-incremental-state';

function ProgressBar() {
  const [progress, incrementProgress] = useIncrementalState(0, 10);

  function handleClick() {
    incrementProgress();
  }

  return (
    <div>
      <div style={{ width: `${progress}%`, height: '20px', backgroundColor: 'green' }}></div>
      <button onClick={handleClick}>Next Step</button>
    </div>
  );
}
In the example above, the useIncrementalState hook is used to manage the progress state variable, which is initialized to 0 and incremented by 10 on each click of the "Next Step" button. The progress variable is used to set the width of a green div, which represents the progress bar.
