import "./App.scss";
import MyComponent from "./components/MyComponent";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <>
        Hello World
        <MyComponent />
      </>
    );
  }
}

export default App;
