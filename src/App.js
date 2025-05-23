import "./App.scss";
import MyComponent from "./components/MyComponent";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        Hello World
        <MyComponent />
      </div>
    );
  }
}

export default App;
