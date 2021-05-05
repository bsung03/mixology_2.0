import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';


class AddIngredient extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            category: ''
        }
        this.changeCategory = this.changeCategory.bind(this)
        this.changeName = this.changeName.bind(this)
        this.submitIngredient = this.submitIngredient.bind(this)
    }

    changeName(event){
        this.setState({
            name: event.target.value
        })
    }

    changeCategory(event){
        this.setState({
            category: event.target.value
        })
    }

    submitIngredient(event){
        event.preventDefault()

        const newIngredient = {
            name : this.state.name,
            category : this.state.category
        }

        axios.post('http://localhost:5000/ingredients/add', newIngredient)
        .then((response) => {
            this.props.rerendertable();
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }
    
    render() {
        return(
            <div>
               <Form onSubmit={this.submitIngredient}>
                    <Form.Group>
                        <Form.Label>Add Ingredient</Form.Label>
                        <Form.Control type="text" onChange={this.changeName} value={this.state.name} placeholder="Ingredient Name"/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
               </Form>
            </div>
        );
    }
}

export default AddIngredient;
