import React from "react";
import PropTypes from "prop-types";
import { Col, Row, Card, CardHeader, CardTitle, CardBody, Table, Button } from "reactstrap";

function KegDetail(props) {
  const { keg, onClickingDelete, onClickingEdit } = props;
  return (
    <React.Fragment>
      <Col md="12">
        <Row>
          <Card>
            <CardHeader><h4>{keg.name}</h4></CardHeader>
            <CardBody>
              <CardTitle>
                {keg.pints < 10 && keg.pints > 0 && "Almost empty"}
                {keg.pints === 0 && "Out of stock."}
              </CardTitle>
              <Table>
                <tbody>
                  <tr>
                    <th>Brand:</th>
                    <td>{keg.brand}</td>
                  </tr>
                  <tr>
                    <th>ABV:</th>
                    <td>{Number(keg.abv).toFixed(1)}%</td>
                  </tr>
                  <tr>
                    <th>Price:</th>
                    <td>${Number(keg.price).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <th>Pints Left:</th>
                    <td>{keg.pints}</td>
                  </tr>
                </tbody>
              </Table>
              <Button onClick={() => onClickingDelete(keg.id)}>Remove Keg</Button>
              <Button onClick={() => onClickingEdit()}>Edit Keg</Button>
            </CardBody>
          </Card>
        </Row>
      </Col>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  keg: PropTypes.object
}

export default KegDetail;