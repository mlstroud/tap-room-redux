import React from "react";
import Keg from "./Keg";
import { Row, Col, Card } from "reactstrap";

function KegList() {
  return (
    <React.Fragment>
      <Col md="12">
        <Row>
          <Card>
            <Keg />
          </Card>
        </Row>
        <Row>
          <Card>
            <Keg />
          </Card>
        </Row>
        <Row>
          <Card>
            <Keg />
          </Card>
        </Row>
      </Col>
    </React.Fragment>
  );
}

export default KegList;