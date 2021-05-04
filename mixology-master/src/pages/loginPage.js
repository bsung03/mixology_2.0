import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import AddUser from '../components/addUser';


class LoginPage extends Component {
    constructor(props){
        super(props)

    }



    render() {
        return(
            <div className='container'>
                <div className='form-div'>
                    <h4>Login Page</h4>
                    <AddUser/>
                </div>
            </div>
        );
    }
}

export default LoginPage;
