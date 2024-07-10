import React from "react";
import MyComponent from "./MyComponent";
import Say from "./Say";

const App = () => {
  return (
    <>
      <MyComponent name="React" favoriteNumber={1}>
        리액트
      </MyComponent>
      <Say />
    </>
  );
};

export default App;
