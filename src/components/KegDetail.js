import React from "react";
import PropTypes from "prop-types";
import { Col, Row, Card, Table } from "reactstrap";

function KegDetail(props) {
  return (
    <React.Fragment>
      <Col md="12">
        <Row>
          <Card>
            <h3>{props.keg.name}</h3>
            <Table>
              <tbody>
                <tr>
                  <th>Brand:</th>
                  <td>{props.keg.brand}</td>
                </tr>
                <tr>
                  <th>ABV:</th>
                  <td>{props.keg.abv}</td>
                </tr>
                <tr>
                  <th>Price:</th>
                  <td>{props.keg.price}</td>
                </tr>
                <tr>
                  <th>Pints Left:</th>
                  <td>{props.keg.pints}</td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Row>
      </Col>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  abv: PropTypes.number,
  price: PropTypes.number,
  pints: PropTypes.number,
  id: PropTypes.string
}

export default KegDetail;