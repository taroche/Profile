import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import CarouselPage from "../pages/CarouselPage";
import ContactPage from "../pages/ContactPage";
import Aboutpage from "../pages/Aboutpage";
import { Home } from "../pages/Home";

export const Header = () => {
  return (
    <Router basename="/Profile">
      <Container className="p-0" fluid={true}>
        <Navbar className="Navbar" bg="transparent" expand="lg">
          <Container>
            <Navbar.Brand className="nav-fonts">Tristan LaRoche</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link
                  className="nav-fonts font-weight-bolder nav-link mr-4"
                  to="/"
                >
                  {" "}
                  Home
                </Link>
                <Link
                  className="nav-fonts font-weight-bolder nav-link mr-4"
                  to="/project"
                >
                  {" "}
                  Projects
                </Link>
                <Link
                  className="nav-fonts font-weight-bolder nav-link mr-4"
                  to="/about"
                >
                  {" "}
                  About
                </Link>
                <Link
                  className="nav-fonts font-weight-bolder nav-link"
                  to="/contact"
                >
                  {" "}
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<CarouselPage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Container>
    </Router>
  );
};
