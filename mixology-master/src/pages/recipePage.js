import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
import { Button, Form, Table } from 'react-bootstrap';


const Recipe = props => (
    <tr>
        <td>{props.recipe.name}</td>
        <td>{props.recipe.category}</td>
        <td>{props.recipe.alc}</td>
        <td>{props.recipe.glass}</td>
    </tr>
)



class RecipePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            allrecipes : []
        }
        this.listRecipes = this.listRecipes.bind(this)
    }


    componentDidMount(){
        axios.get("http://localhost:5000/recipes/").then(res => {
            this.setState({
                allrecipes : res.data
            })
        }).catch(err => {console.log(err)})
    }

    listRecipes(){
        return this.state.allrecipes.map(currRecipe => {
            return <Recipe recipe={currRecipe}/>
        })
    }

    render() {
        return(
            <div className='container'>
                <h4>Recipe Page</h4>
                <table className="table">
                    <thead className="thead-light">

                    </thead>
                    <tbody>
                        {this.listRecipes()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default RecipePage;
