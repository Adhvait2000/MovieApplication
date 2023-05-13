import React from "react";
import { createRoot } from "react-dom"; //added to fix the error appearing on the console 
import App from "./App";

createRoot(document.getElementById("root")).render(<App />);
