import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <>
        <Header></Header>
        <Footer></Footer>
      </>
    );
  }
}

export default App;
