import React from "react";
import PropTypes from "prop-types";
import { CardBody, CardTitle, Table, } from "reactstrap";


function Keg(props) {
  return (
    <React.Fragment>
      <CardBody>
        <CardTitle onClick={() => props.whenKegClicked(props.id)}><h4>{props.name}</h4></CardTitle>
        <Table>
          <tbody>
            <tr>
              <th>Brand</th>
              <td>{props.brand}</td>
            </tr>
            <tr>
              <th>ABV</th>
              <td>{props.abv}%</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>{props.price}</td>
            </tr>
            <tr>
              <th>Pints Left</th>
              <td>{props.pints}</td>
            </tr>
          </tbody>
        </Table>

      </CardBody>
    </React.Fragment>
  );
}

Keg.propTypes = {
  whenKegClicked: PropTypes.func,
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  pints: PropTypes.number,
  id: PropTypes.string
}

export default Keg;