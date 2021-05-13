import React, { Component } from 'react'
import MyPantry_add from '../components/mypantry_add'
import MyPantry_list from '../components/mypantry_list'

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
                {/* <h5>What the fuck</h5> */}
                <MyPantry_add/>
                <MyPantry_list/>
            </div>
        )
    }
}

export default PantryPage
