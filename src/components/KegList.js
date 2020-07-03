import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";
import { Row, Col, Card } from "reactstrap";

function KegList(props) {
  return (
    <React.Fragment>
      <Col md="12">
        {props.kegList.map((keg) =>
          <Row key={"row" + keg.id}>
            <Card key={"card" + keg.id}>
              <Keg name={keg.name}
                brand={keg.brand}
                abv={keg.abv}
                price={keg.price}
                key={keg.id} />
            </Card>
          </Row>
        )}
      </Col>
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
}

export default KegList;