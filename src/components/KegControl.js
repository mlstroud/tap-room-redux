import React from "react";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
import KegDetail from "./KegDetail";
import EditKegForm from "./EditKegForm";
import { Button } from "reactstrap";

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [],
      formVisibleOnPage: false,
      selectedKeg: null,
      editing: false
    };
  }

  handleClick = () => {
    this.setState({ formVisibleOnPage: true });
  }

  render() {
    let currentlyVisibleState = null;
    let addKegButton = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm />
    } else {
      currentlyVisibleState = <KegList />
      addKegButton = <Button onClick={this.handleClick}>Add Keg</Button>
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        {addKegButton}
      </React.Fragment>
    );
  }
}

export default KegControl;