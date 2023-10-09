import React from "react";
import Components from "./Components/Components.js";
import * as Env from "./environments";

// Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
// Parse.serverURL = Env.SERVER_URL;
// I parse in enviroments.js

function App() {
  return <Components />;
}

export default App;
