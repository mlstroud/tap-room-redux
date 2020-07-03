import React from "react";
import PropTypes from "prop-types";
import { Col, Row, Card, CardHeader, CardTitle, CardBody, Table } from "reactstrap";

function KegDetail(props) {
  return (
    <React.Fragment>
      <Col md="12">
        <Row>
          <Card>
            <CardHeader><h4>{props.keg.name}</h4></CardHeader>
            <CardBody>
              <CardTitle>{props.keg.pints === 0 && "Out of stock."}</CardTitle>
              <Table>
                <tbody>
                  <tr>
                    <th>Brand:</th>
                    <td>{props.keg.brand}</td>
                  </tr>
                  <tr>
                    <th>ABV:</th>
                    <td>{Number(props.keg.abv).toFixed(1)}%</td>
                  </tr>
                  <tr>
                    <th>Price:</th>
                    <td>${Number(props.keg.price).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <th>Pints Left:</th>
                    <td>{props.keg.pints}</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
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