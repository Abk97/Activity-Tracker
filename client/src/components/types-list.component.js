import React, { Component } from 'react';
import axios from 'axios';

export default class TypesList extends Component {
    constructor(props) {
        super(props);

        this.state = { activities: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/activities/')
            .then(response => {
                this.setState({ activities: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    typesList() {
        let types = this.state.activities.map( el => {
            return el.description
        })

        let set = new Set()

        const uniqueTypes = types.filter( el => {
            const val = set.has(el)
            if(val){
                return false
            }
            set.add(el)
            return true
        })

        return uniqueTypes.map( el => {
            return <tr> <td> {el} </td> </tr>
        })
    }

    render() {
        return (
            <div>
                <h3>Types Of Activities</h3>
                <table className="table">
                    <tbody>
                        {this.typesList()}
                    </tbody>
                </table>
            </div>
        )
    }
} 