import React from "react";
import Item from "./components/Item";
import {UserProvider} from "./components/userContext";

function App() {
  return (
    <div className="App">
      <h1>Welcome To the To Do Application</h1>
      <hr />
      <UserProvider value="Raja">
      <Item />
      </UserProvider>
    </div>
  );
}

export default App;
