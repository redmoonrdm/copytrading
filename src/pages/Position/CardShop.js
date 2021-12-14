import PropTypes from 'prop-types'
import React from "react"
import { Card, Col, Row ,CardBody, Progress, Button } from "reactstrap"

import { Link } from "react-router-dom"

const CardShop = props => {

  const { shop } = props

  return (
    <React.Fragment>
      <Col sm="6">
        <Card>
          <CardBody>
          <Row>
            <Col sm="1">
                <img src={shop.img} alt="img-1" className="avatar-sm mt-2 mb-4" />
            </Col>
            <Col sm="2">
                <div className="mt-2">
                  <p className="text-muted">
                    {shop.author}
                  </p>
                  <span className="badge badge-soft-success font-size-14 me-1">+0.5%</span>
                </div>
            </Col>
            <Col sm="7">
                <div className="mt-2">
                  <p className="text-muted">
                  TP :  {shop.author}
                  <br></br>
                  SL :  {shop.author}
                  <br></br>
                  Bought :  {shop.author}
                  </p>
                </div>
            </Col>
            <Col sm="2">
              <Button color="primary" size="sm" className="waves-effect mb-2">
                  Close Position
              </Button>
            </Col>
          </Row>

          <Progress className="mb-3" value={70} color="success" style={{ height: "3px" }}></Progress>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  )
}

CardShop.propTypes = {
  shop: PropTypes.object
}

export default CardShop
