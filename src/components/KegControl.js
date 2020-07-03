import React from "react";
import NewKegForm from "./NewKegForm";
import KegDetail from "./KegDetail";

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [],
      formVisibleOnPage: false,
      selectedKeg: null
    };
  }

  render() {
    return (
      "KegControl"
    );
  }
}

export default KegControl;