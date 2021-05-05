import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
import { Button, Form, Table } from 'react-bootstrap';
import AddIngredient from '../components/addIngredient';

const Ingredient = props => (
    <tr>
        <td>{props.ingredient.name}</td>
    </tr>
)

class IngredientsPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            allingredients : []
        }
        this.ListAllIngredients = this.ListAllIngredients.bind(this);
        this.AddedIngredient = this.AddedIngredient.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:5000/ingredients/').then(res => {
            this.setState({
                allingredients : res.data
            })
        }).catch(err => {console.log(err)});
    }
    
    ListAllIngredients(){
        return (
            this.state.allingredients.map(curringredient => {
                return <Ingredient ingredient={curringredient}/>
            })
        )
    }

    AddedIngredient(){
        axios.get('http://localhost:5000/ingredients/').then(res => {
            this.setState({
                allingredients : res.data
            })
        }).catch(err => {console.log(err)});
        console.log("trying to update table")
    }

    render() {
        return(
            <div className='container'>
                <div className='form-div'>
                    <h4>Ingredients Page</h4>
                    <AddIngredient rerendertable={this.AddedIngredient}/>
                    <Table>
                        <thead>
                            <th>ingredient</th>
                        </thead>
                        <tbody>
                            {this.ListAllIngredients()}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default IngredientsPage;
