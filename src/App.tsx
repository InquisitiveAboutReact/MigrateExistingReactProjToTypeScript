import React from "react";
import Item from "./components/Item";
import {UserProvider} from "./components/userContext";

function App() {
  return (
    <div className="App">
      <h1>Welcome To the To Do Application</h1>
      <p>Migrated this project from existing JS to Typescript !!!! </p>
      <hr />
      <UserProvider value="Raja">
      <Item />
      </UserProvider>
    </div>
  );
}

export default App;
