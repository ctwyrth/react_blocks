import React, { Component } from 'react'

const mainStyle = {
   backgroundColor: "#e06666",
   display: "flex",
   flexDirection: "column",
   flex: "3",
   height: "auto",
   margin: "10px 10px 0 5px",
   padding: "10px 5px 10px 5px"
};

export default class Main extends Component {
   render() {
      return (
         <div style={ mainStyle }>
            { this.props.children }
         </div>
      )
   }
}
