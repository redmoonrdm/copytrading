import PropTypes from 'prop-types'
import React from "react"
import { Card, Col, Row ,CardBody, Progress, Button } from "reactstrap"

import { Link } from "react-router-dom"

const CardShop = props => {

  const { shop } = props

  return (
    <React.Fragment>
      <Col xl="3" sm="6">
        <Card>
          <CardBody>

          <hr className="mb-3 my-4"></hr>

          <Row className="text-center">
              <div className="col-6">
                  <p className="text-muted mb-2">Win Rate</p>
                  <h5>{shop.product}%</h5>
              </div>
              <div className="col-6">
                  <p className="text-muted mb-2">Profit / Day</p>
                  <h5 className="badge badge-soft-success font-size-14 me-1"><i className="mdi mdi-menu-up"> </i> 0.5%</h5>
              </div>
          </Row>
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
