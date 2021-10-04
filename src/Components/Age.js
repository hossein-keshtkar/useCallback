import React, { useState, useCallback } from "react";
import Button from "./Button";

const Age = (props) => {
  console.log("Age");
  const [age, setAge] = useState(0);

  const increment = useCallback(() => {
    setAge((prevAge) => prevAge + 1);
  }, []);

  return (
    <>
      <h3>Your age is: {age}</h3>
      <Button name="Add Year" functionality={increment} />
      <hr />
    </>
  );
};
export default React.memo(Age);
