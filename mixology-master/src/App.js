import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import HomePage from './pages/homepage';
import axios from 'axios';
import Login from './pages/login';


class App extends React.Component {

  constructor(props) {
    super(props)


    this.state = {
      title: "Mixolog",
    }

  }


  render(){
    return(

      <Router>
        <Container className="myheader" fluid={true}>
            <Navbar expand="lg">
              <Navbar.Brand >{this.state.title}</Navbar.Brand>
              <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                    <Link className="nav-link">Home</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        </Container>


        <HomePage/>
        <Login/>
        
      </Router>
    );
  }


}

export default App;
