import React, { Component } from 'react'

const adStyle = {
   backgroundColor: "#b4a7d6",
   display: "flex",
   flexDirection: "row",
   height: "75px",
   margin: "10px 5px 0 5px"
}

export default class Advertisement extends Component {
   render() {
      return (
         <div style={ adStyle }>Advertisement</div>
      )
   }
}
