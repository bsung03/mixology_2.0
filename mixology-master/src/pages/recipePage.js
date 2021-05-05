import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
import { Button, Form, Table } from 'react-bootstrap';


class RecipePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            allrecipes : []
        }

    }



    render() {
        return(
            <div className='container'>
                <h4>Recipe Page</h4>
            </div>
        );
    }
}

export default RecipePage;
