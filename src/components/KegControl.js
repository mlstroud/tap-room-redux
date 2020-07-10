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
    this.state = {
      selectedKeg: null
    };
  }

  handleClick = () => {
    const { dispatch } = this.props;
    if (this.state.selectedKeg !== null) {
      dispatch(a.noEdit());

      this.setState({
        selectedKeg: null
      });
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

    this.setState({
      selectedKeg: selectedKeg
    });
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

    this.setState({
      selectedKeg: null
    });
  }

  handleClickingEdit = () => {
    const { dispatch } = this.props;
    dispatch(a.toggleEdit());
  }

  handleEditingKeg = (editedKeg) => {
    const { dispatch } = this.props;

    dispatch(a.addKeg(editedKeg));
    dispatch(a.toggleEdit());

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

KegControl.propTypes = {
  masterKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
  editing: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisible,
    editing: state.editing,
  }
};

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;