import React from "react";
import ReactDOM from "react-dom/client";
//import './index.css';
import { BowOnlineAPP } from "./BowOnlineAPP";
import { BrowserRouter } from "react-router-dom";

// ReactDOM.createRoot( document.getElementById('root')).render(
//     <React.StrictMode>
//         <BowOnlineAPP />
//     </React.StrictMode>
// )

ReactDOM.createRoot( document.getElementById('root')).render(
    <BrowserRouter>
      <BowOnlineAPP />
    </BrowserRouter>,
  );