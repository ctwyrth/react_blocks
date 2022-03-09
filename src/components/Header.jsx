import React, { Component } from 'react'

const headerStyle = {
   backgroundColor: "#6aa84f",
   display: "flex",
   flexDirection: "row",
   width: "100%",
   height: "60px"
};

export default class Header extends Component {
   render() {
      return (
         <div style={ headerStyle }>Header</div>
      )
   }
}
