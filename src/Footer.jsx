import React from "react";

const Footer=()=> {
  var year=new Date().getFullYear();
  return (
    <>
      <footer>copyright © {year}</footer>
    </>
  );
}

export default Footer;
