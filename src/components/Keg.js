import React from "react";
import PropTypes from "prop-types";
import { CardBody, CardTitle, Table, } from "reactstrap";


function Keg(props) {
  return (
    <React.Fragment>
      <CardBody>
        <CardTitle><h4>{props.name}</h4></CardTitle>
        <Table>
          <tbody>
            <tr>
              <th>Brand</th>
              <td>{props.brand}</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>{props.price}</td>
            </tr>
          </tbody>
        </Table>

      </CardBody>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string
}

export default Keg;