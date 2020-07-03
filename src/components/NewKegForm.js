import React from "react";
import PropTypes from "prop-types";
import KegForm from "./KegForm";
import { v4 } from "uuid";

function NewKegForm(props) {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.kegName.value,
      brand: event.target.kegBrand.value,
      price: parseFloat(event.target.kegPrice.value),
      abv: event.target.kegAbv.value,
      pints: parseInt(12),
      id: v4()
    })
  }

  return (
    <React.Fragment>
      <KegForm
        formSubmissionHandler={handleNewKegFormSubmission}
        buttonText="Add Keg" />
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default NewKegForm;