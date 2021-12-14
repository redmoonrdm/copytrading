import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { map } from "lodash";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//Import Card
import CardShop from "./CardShop";
import { getShops } from "../../store/e-commerce/actions";

class EcommerceShops extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbItems: [
        { title: "Copy Trading", link: "#" },
        { title: "Traders", link: "#" },
      ],
    };
  }

  componentDidMount() {
    const { onGetShops } = this.props;
    onGetShops();
  }

  render() {
    const { shops } = this.props;

    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            {/* Render Breadcrumb */}
            <Breadcrumbs
              title="Copy Trading"
              breadcrumbItems={this.state.breadcrumbItems}
            />
            <Row>
              {map(shops, (shop, key) => (
                <CardShop shop={shop} key={"_shop_" + key} />
              ))}
            </Row>

          </Container>
        </div>
      </React.Fragment>
    );
  }
}

EcommerceShops.propTypes = {
  shops: PropTypes.array,
  onGetShops: PropTypes.func,
};

const mapStateToProps = ({ Ecommerce }) => ({
  shops: Ecommerce.shops,
});

const mapDispatchToProps = (dispatch) => ({
  onGetShops: () => dispatch(getShops()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EcommerceShops);
