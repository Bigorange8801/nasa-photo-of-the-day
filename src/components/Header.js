import React from "react";

function Header(props) {
  // console.log("header props", props.data.title);
  return <h3>{props.data.title}</h3>;
}

export default Header;