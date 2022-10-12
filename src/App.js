import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="appBody">
        <Header></Header>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
