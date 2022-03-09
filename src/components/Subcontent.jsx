import React, { Component } from 'react'

const subStyle = {
   backgroundColor: "#ffd966",
   display: "flex",
   flexDirection: "column",
   flex: "1",
   height: "390px",
   margin: "0 5px 0 5px",
   textAlign: "left"
}

export default class Subcontent extends Component {
   render() {
      return (
         <div style={ subStyle }>SubContent</div>
      )
   }
}
