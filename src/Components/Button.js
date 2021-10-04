import React from "react";

const Button = ({ name, functionality }) => {
  console.log("Button");
  return (
    <>
      <button onClick={functionality}>{name}</button>
    </>
  );
};

export default React.memo(Button);
