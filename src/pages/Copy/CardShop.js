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
          <div className="text-center">
              <img src={"https://ui-avatars.com/api/?name="+shop.name+"&&rounded=true&&background="+shop.profileLink+"&color=fff"} alt="img-1" className="avatar-sm mt-2 mb-4" />
              <div className="flex-1">
                  <h5 className="text-truncate"><Link to={shop.profileLink} className="text-dark">{shop.name}</Link></h5>
                  <p className="text-muted">
                      <i className="mdi mdi-account-network-outline me-1"></i> {shop.author}
                  </p>

              </div>
          </div>

          <Progress className="mb-3 my-4" value={shop.product} color="success" style={{ height: "3px" }}></Progress>

          <Row className="text-center">
              <div className="col-4">
                  <p className="text-muted mb-2">Win Rate</p>
                  <h5>{shop.product}%</h5>
              </div>
              <div className="col-4">
                  <p className="text-muted mb-2">Daily Profit</p>
                  <h5 className="badge badge-soft-success font-size-14 me-1"><i className="mdi mdi-menu-up"> </i> {shop.balance}%</h5>
              </div>
              <div className="col-4">
                <Link to="/trader/1">
                  <Button color="info" size="sm" outline className="waves-effect waves-light mt-4">
                    Follow Details
                  </Button>
                </Link>
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
