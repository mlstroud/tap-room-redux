import React from "react";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
import KegDetail from "./KegDetail";
import EditKegForm from "./EditKegForm";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import * as a from "../actions";

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedKeg: null
    };
  }

  handleClick = () => {
    const { dispatch } = this.props;
    if (this.state.selectedKeg !== null) {
      const action2 = a.noEdit();
      dispatch(action2);

      this.setState({
        selectedKeg: null
      });
    } else {
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    const action2 = a.toggleForm();

    dispatch(action);
    dispatch(action2);
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];

    this.setState({
      selectedKeg: selectedKeg
    });
  }

  handleSellingPint = (soldKeg) => {
    if (soldKeg.pints > 0) {
      const { dispatch } = this.props;
      const action = a.sellPint(soldKeg);

      dispatch(action);
    }
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKeg(id);

    dispatch(action);

    this.setState({
      selectedKeg: null
    });
  }

  handleClickingEdit = () => {
    const { dispatch } = this.props;
    const action = a.toggleEdit();
    dispatch(action);
  }

  handleEditingKeg = (editedKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(editedKeg);
    const action2 = a.toggleEdit();

    dispatch(action);
    dispatch(action2);

    this.setState({
      selectedKeg: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.props.editing) {
      currentlyVisibleState = <EditKegForm keg={this.state.selectedKeg} onEditClick={this.handleEditingKeg} />
      buttonText = "View Kegs";
    } else if (this.state.selectedKeg !== null) {
      currentlyVisibleState = <KegDetail
        keg={this.state.selectedKeg}
        onClickingDelete={this.handleDeletingKeg}
        onClickingEdit={this.handleClickingEdit} />
      buttonText = "View Kegs";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "View Kegs";
    } else {
      currentlyVisibleState = <KegList
        kegList={this.props.masterKegList}
        onKegSelection={this.handleChangingSelectedKeg}
        onSellPint={this.handleSellingPint} />
      buttonText = "Add Keg";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <Button onClick={this.handleClick}>{buttonText}</Button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisible,
    editing: state.editing,
    // selectedKeg: state.selectedKeg
  }
};

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;