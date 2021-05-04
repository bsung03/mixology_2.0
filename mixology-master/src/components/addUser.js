import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';


class AddUser extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            email: '',
            password: ''
        }
        this.changeUsername = this.changeUsername.bind(this)
        this.changeemail = this.changeemail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.submitNewUser = this.submitNewUser.bind(this)
    }

    changeUsername(event){
        this.setState({
            username:event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }
    changeemail(event){
        this.setState({
            email:event.target.value
        })
    }

    submitNewUser(event){
        event.preventDefault()
        const user = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        axios.post('http://localhost:5000/users/add', user)
        .then((response) => {
        console.log(response);
        }, (error) => {
        console.log(error);
        });
    }

    render() {
        return(
            <Form onSubmit={this.submitNewUser}>
                <Form.Group>
                    <Form.Control type="text" placeholder="Username" onChange={this.changeUsername} value={this.state.username} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" onChange={this.changeemail} value={this.state.email} />
                </Form.Group>


                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" onChange={this.changePassword} value={this.state.password} />
                </Form.Group>
                
                
                <Button variant='primary' type='submit' value='Submit'>
                    button
                </Button>
            </Form>
        );
    }
}

export default AddUser;
