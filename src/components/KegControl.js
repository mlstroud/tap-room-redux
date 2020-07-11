import React from "react";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
import KegDetail from "./KegDetail";
import EditKegForm from "./EditKegForm";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import * as a from "../actions";
import PropTypes from "prop-types";

class KegControl extends React.Component {

  constructor(props) {
    super(props);
  }

  handleClick = () => {
    const { dispatch } = this.props;
    if (this.props.selectedKeg !== null) {
      dispatch(a.noEdit());
      dispatch(a.clearKeg());
    } else {
      dispatch(a.toggleForm());
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;

    dispatch(a.addKeg(newKeg));
    dispatch(a.toggleForm());
  }

  handleChangingSelectedKeg = (keg) => {
    const selectedKeg = this.props.masterKegList[keg.id];
    const { dispatch } = this.props;
    dispatch(a.selectKeg(keg));
  }

  handleSellingPint = (soldKeg) => {
    if (soldKeg.pints > 0) {
      const { dispatch } = this.props;
      dispatch(a.sellPint(soldKeg));
    }
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    dispatch(a.deleteKeg(id));
    dispatch(a.clearKeg());

  }

  handleClickingEdit = () => {
    const { dispatch } = this.props;
    dispatch(a.toggleEdit());
  }

  handleEditingKeg = (editedKeg) => {
    const { dispatch } = this.props;

    dispatch(a.addKeg(editedKeg));
    dispatch(a.toggleEdit());
    dispatch(a.clearKeg());
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.props.editing) {
      currentlyVisibleState = <EditKegForm keg={this.props.selectedKeg} onEditClick={this.handleEditingKeg} />
      buttonText = "View Kegs";
    } else if (this.props.selectedKeg !== null) {
      currentlyVisibleState = <KegDetail
        keg={this.props.selectedKeg}
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

KegControl.propTypes = {
  masterKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
  editing: PropTypes.bool,
  selectedKeg: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisible,
    editing: state.editing,
    selectedKeg: state.selectedKeg
  }
};

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;