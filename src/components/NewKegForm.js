import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import { Form, Input, Label, Button } from "reactstrap";

function NewKegForm(props) {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.kegName.value,
      brand: event.target.kegBrand.value,
      price: parseFloat(event.target.kegPrice.value),
      abv: event.target.kegAbv.value,
      pints: 124,
      id: v4()
    })
  }

  return (
    <React.Fragment>
      <Form onSubmit={handleNewKegFormSubmission}>
        <Label for="kegName">Name</Label>
        <Input type="text"
          name="kegName"
          placeholder="Tasty IPA" />
        <Label for="kegBrand">Brand</Label>
        <Input type="text"
          name="kegBrand"
          placeholder="Tasty Brewing Co." />
        <Label for="kegAbv">ABV</Label>
        <Input type="text"
          name="kegAbv"
          placeholder="6.2" />
        <Label for="kegPrice">Price</Label>
        <Input type="text"
          name="kegPrice"
          placeholder="6.99" />
        <Button type="submit">Add</Button>
      </Form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default NewKegForm;