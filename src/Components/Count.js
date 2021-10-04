import React, { useState, useCallback } from "react";
import Button from "./Button";

const Count = (props) => {
  console.log("Count");
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <>
      <h3>Count: {count}</h3>
      <Button name="increment" functionality={increment} />
      <Button name="decrement" functionality={decrement} />
      <Button name="reset" functionality={reset} />
      <hr />
    </>
  );
};
export default React.memo(Count);
