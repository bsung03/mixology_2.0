import React, { Component } from 'react';
import {BrowserRouter as Router,Switch, Route, Link} from 'react-router-dom'
import './App.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import HomePage from './pages/homepage';
import axios from 'axios';
import LoginPage from './pages/loginPage';
import IngredientsPage from './pages/ingredientsPage';


class App extends React.Component {

  constructor(props) {
    super(props)


    this.state = {
      title: "Mixolog",
      user: ''
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
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/login">Login</Link>
                    <Link className="nav-link" to="/ingredients">Ingredients</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        </Container>

        <Switch> 

          <Route path="/ingredients">
           <IngredientsPage/>
          </Route> 

          <Route path="/login">
           <LoginPage/>
          </Route> 

          <Route path="/">
            <HomePage/>
          </Route>

        </Switch>    

      </Router>
    );
  }


}

export default App;
