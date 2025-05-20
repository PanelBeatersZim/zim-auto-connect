
import React from "react";
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("No root element found with id='root'.");
}

createRoot(rootElement).render(<App />);
