import React, { Component } from 'react'

class MyPantry_list extends Component {

    constructor(props){
        super(props)
        this.state = {
            username: '',
            all_ingredients: []
        }
    }


    render() {
        return (
            <h4>pantry list</h4>
        )
    }
}

export default MyPantry_list
