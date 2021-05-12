import React, { Component } from 'react'

export class PantryPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            myPantry : []
        }
        this.listPantryIngredients = this.listPantryIngredients.bind(this)
    }

    listPantryIngredients(){
        
    }

    render() {
        return (
            <div>
                <h4>Pantry Page</h4>
            </div>
        )
    }
}

export default PantryPage
