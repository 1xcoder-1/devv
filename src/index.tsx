import React from "react";
   import Clarity from '@microsoft/clarity';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

  const projectId = 'tr66dq2439';

   if (process.env.NODE_ENV === 'production') {
      Clarity.init(projectId);
    }
    else {
      console.log('Clarity is not initialized in development mode.');
    }
    Clarity.init(projectId);


// Get the root element from the HTML document by its ID
const container = document.getElementById("root");

// Check if the root element exists
if (!container) {
  throw new Error(
    "Root element not found. Please ensure there is an element with id 'root' in your HTML."
  );
}

// Create a root for rendering the React application
const root = ReactDOM.createRoot(container as HTMLElement);

// Render the React application inside the root element
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
