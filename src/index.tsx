import React from "react";
import ReactDOM from "react-dom";
import Footer from "./pages/frame/Footer";
import Header from "./pages/frame/Header";
import MainPage from "./pages/MainPage";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Header />

    <MainPage />

    <Footer />
  </React.StrictMode>,
  document.body
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
