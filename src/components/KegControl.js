import React from "react";
import NewKegForm from "./NewKegForm";

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [],
      formVisibleOnPage: false
    };
  }

  render() {
    return (
      "KegControl"
    );
  }
}

export default KegControl;