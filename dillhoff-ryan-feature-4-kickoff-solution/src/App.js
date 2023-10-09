import React from "react";
import Components from "./Components/Components.js";
import * as Env from "./environments";
import Parse from "parse";

// Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
// Parse.serverURL = Env.SERVER_URL;

// Sofia and Celina Keys from our back4app
Parse.serverURL = "https://parseapi.back4app.com"; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  "0B4AqrDw2p74aRMMK1TqsomsthhJHJCRO6PHfzh7", // This is your Application ID
  "gtXFOmtfvXJpE4BBqusRIF8T1pxEHy6wogdzyEmx" // This is your Javascript key
);

function App() {
  return <Components />;
}

export default App;
