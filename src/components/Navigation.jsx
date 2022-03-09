import React, { Component } from 'react'

const navigationStyle = {
   backgroundColor: "#6fa8dc",
   display: "flex",
   flexDirection: "column",
   flex: "1",
   height: "400px",
   margin: "10px 5px 0 10px",
   textAlign: "left"
};

export default class Navigation extends Component {
   render() {
      return (
         <div style={ navigationStyle }>Navigation</div>
      )
   }
}
