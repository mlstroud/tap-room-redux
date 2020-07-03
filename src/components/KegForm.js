import React from "react";
import PropTypes from "prop-types";
import { Form, Input, Label, Button } from "reactstrap";

function KegForm(props) {
  return (
    <React.Fragment>
      <Form onSubmit={props.formSubmissionHandler}>
        <Label for="kegName">Name</Label>
        <Input type="text"
          name="kegName"
          placeholder="Tasty IPA"
          className="form-control" />
        <Label for="kegBrand">Brand</Label>
        <Input type="text"
          name="kegBrand"
          placeholder="Tasty Brewing Co."
          className="form-control" />
        <Label for="kegAbv">ABV</Label>
        <Input type="text"
          name="kegAbv"
          placeholder="6.2"
          className="form-control" />
        <Label for="kegPrice">Price</Label>
        <Input type="text"
          name="kegPrice"
          placeholder="6.99"
          className="form-control" />
        <Label for="kegPints">Pints</Label>
        <Input type="text"
          name="kegPints"
          placeholder="124 (Suggested)"
          className="form-control" />
        <Button type="submit">{props.buttonText}</Button>
      </Form>
    </React.Fragment>
  );
}

KegForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default KegForm;