import React from "react";
import Count from "./Components/Count";
import Age from "./Components/Age";

const App = () => {
  console.log("App");
  return (
    <>
      <Count />
      <Age />
    </>
  );
};

export default React.memo(App);
