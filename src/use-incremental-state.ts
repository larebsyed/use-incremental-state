import { useState, useCallback } from "react";

const useIncrementalState = (
  initialValue: number = 0,
  incrementStep: number = 1
) : [number, () => void, () => void] => {
  const [count, setCount] = useState(initialValue);

  const incrementCount = useCallback(
    () => setCount((count: number) => count + incrementStep),
    [incrementStep]
  );

  const decrementCount = useCallback(
    () => setCount((count: number) => count + incrementStep),
    [incrementStep]
  );

  return [count, incrementCount, decrementCount];
};

export default useIncrementalState;
