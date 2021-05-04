import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import AddIngredient from '../components/addIngredient';



class IngredientsPage extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return(
            <div className='container'>
                <div className='form-div'>
                    <h4>Ingredients Page</h4>
                        <AddIngredient/>
                </div>
            </div>
        );
    }
}

export default IngredientsPage;
