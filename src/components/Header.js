import React from "react";
import { Jumbotron } from "reactstrap";
import BannerImg from "./../img/banner.png";

function Header() {
  return (
    <React.Fragment>
      <Jumbotron>
        <img src={BannerImg} className="banner-img" />
        <h1>Epibeerus Tap Room</h1>
      </Jumbotron>
    </React.Fragment>
  );
}

export default Header;