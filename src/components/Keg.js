import React from "react";
import PropTypes from "prop-types";
import { CardBody, CardTitle, Table, Button } from "reactstrap";


function Keg(props) {
  return (
    <React.Fragment>
      <CardBody>
        <CardTitle><h4>{props.name}</h4></CardTitle>
        <Table>
          <tbody>
            <tr>
              <th>Price</th>
              <td>${props.price}</td>
            </tr>
          </tbody>
        </Table>
        <Button onClick={() => props.whenPintSold({
          name: props.name,
          brand: props.brand,
          abv: props.abv,
          pints: props.pints,
          price: props.price,
          id: props.id
        })}>Sell Pint</Button>
        <Button onClick={() => props.whenKegClicked(props.id)}>View Details</Button>
      </CardBody>
    </React.Fragment>
  );
}

Keg.propTypes = {
  whenKegClicked: PropTypes.func,
  whenPintSold: PropTypes.func,
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  pints: PropTypes.number,
  id: PropTypes.string
}

export default Keg;