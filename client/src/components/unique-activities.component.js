import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";

export default class UniqueActivities extends Component {
  constructor(props) {
    super(props);

    this.state = { activities: [] };
  }

  componentDidMount() {
    axios
      .get("/activities/")
      .then((response) => {
        this.setState({ activities: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  uniqueList() {
    const items = this.state.activities;
    return _.chain(items)
      .map(({ description }) => description.toUpperCase())
      .uniq()
      .value()
      .map((value, index) => {
        return (
          <tr key={index}>
            <td> {value} </td>
          </tr>
        );
      });
  }

  // typesList() {
  //   let types = this.state.activities.map((el) => {
  //     return el.description;
  //   });

  //   let set = new Set();

  //   const uniqueTypes = types.filter((el) => {
  //     const val = set.has(el);
  //     if (val) {
  //       return false;
  //     }
  //     set.add(el);
  //     return true;
  //   });

  //   return uniqueTypes.map((el) => {
  //     return (
  //       <tr>
  //         {" "}
  //         <td> {el} </td>{" "}
  //       </tr>
  //     );
  //   });
  // }

  render() {
    return (
      <div>
        <h3>Types Of Activities Logged</h3>
        <table className="table">
          <tbody>{this.uniqueList()}</tbody>
        </table>
      </div>
    );
  }
}
