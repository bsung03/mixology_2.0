import React, { Component } from 'react'
import { Button, Form, Table } from 'react-bootstrap';
import axios from 'axios';


export class MyPantry_add extends Component {

    constructor(props){
        super(props)
        this.state = {
            username: '',
            ingredient_name : '',
            user_id : "609cc13123a96e7d7ce83be4"
        }
        this.addIngredientToPantry = this.addIngredientToPantry.bind(this)
        this.changeIngredientName = this.changeIngredientName.bind(this)
    }

    addIngredientToPantry(event){
        const _id = this.state.user_id
        const ingredient_name = this.state.ingredient_name

        axios.post('http://localhost:5000/users/mypantry/add', {id: _id, ingredient_name: ingredient_name})
        .then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }

    changeIngredientName(event){
        this.setState({
            ingredient_name: event.target.value
        })
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.addIngredientToPantry}>
                    <Form.Group>
                        <Form.Label>Add Ingredint to my Pantry</Form.Label>
                        <Form.Control type="text" onChange={this.changeIngredientName} value={this.state.ingredient_name} placeholder="Ingredient Name"/>
                    </Form.Group>
                    <Button variant='primary' type='submit' value='Submit'>
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default MyPantry_add
