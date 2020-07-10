import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";
import { Row, Col, Card } from "reactstrap";

function KegList(props) {
  return (
    <React.Fragment>
      <Col md="12">
        {props.kegList.length === 0 && <h3>No kegs in stock</h3>}
        {Object.values(props.kegList).map((keg) => {

          return <Row key={"row" + keg.id}>
            <Card key={"card" + keg.id}>
              <Keg
                whenKegClicked={props.onKegSelection}
                whenPintSold={props.onSellPint}
                name={keg.name}
                brand={keg.brand}
                abv={keg.abv}
                pints={keg.pints}
                id={keg.id}
                price={keg.price}
                key={keg.id} />
            </Card>
          </Row>
        })}
      </Col>
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func,
  onSellPint: PropTypes.func
}

export default KegList;