import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

//common style
import "./Style/common.scss"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

   <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ToastContainer
        theme="dark"
        position="top-right"
        autoClose={4000}
        closeOnClick
        pauseOnHover={false}
         />
      <ToastContainer />
        <App/>
      </Provider>
    </BrowserRouter>
   </React.StrictMode>
  
 
);
