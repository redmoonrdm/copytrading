import React, { Component } from "react";

import { 
    Button,
  ButtonToggle,
  ButtonGroup,
  FormGroup, Label, Input,
  TabContent, TabPane, Collapse, NavLink, NavItem, CardText, Nav, Card, Row, Col, CardBody, CardHeader, Container } from "reactstrap";

import { Link } from "react-router-dom";

import TradingViewWidget, { Themes } from 'react-tradingview-widget';

//Import Components
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import classnames from "classnames";

/*
import Binance from 'node-binance-api';
const binance = new Binance().options({
  APIKEY: '92gJpkERiIxrm15iZ12p0UZEYm1uhUlo6N9GZM3TQPnF8qZ7V4zw1nvUDsWlqYvz',
  APISECRET: 'i6AJ7CyD45HAn2hEpvR2EqJ7tntVkYSeusMZF4n1HxU6FOvDjJEOr5ZW8gRQsgJO'
});
*/

//import logger from './lib/logger';
//import SocketClient from './lib/socketClient';
//const streamName = 'dotusdt@depth@100ms';
//const socketClient = new SocketClient(`ws/${streamName}`, 'wss://fstream.binance.com/');

//const WebSocket = require('isomorphic-ws');
//const ws = new WebSocket('wss://fstream.binance.com/ws/dotusdt@depth@100ms');

//---

/*
import Binance from 'binance-api-node'
//const client = Binance();
// Authenticated client, can make signed calls
const client = Binance({
  apiKey: '92gJpkERiIxrm15iZ12p0UZEYm1uhUlo6N9GZM3TQPnF8qZ7V4zw1nvUDsWlqYvz',
  apiSecret: 'i6AJ7CyD45HAn2hEpvR2EqJ7tntVkYSeusMZF4n1HxU6FOvDjJEOr5ZW8gRQsgJO',
  getTime: new Date().getTime(),
})
*/

//client.time().then(time => console.log(time));

import {
  addMessage,
  getChats,
  getContacts,
  getGroups,
  getMessages,
} from "../../store/actions";

import { connect } from "react-redux";
import PropTypes from "prop-types";

const WebSocket = require('isomorphic-ws');
const ws = new WebSocket('wss://stream.binance.com:9443/ws/!ticker@arr');

class Terminal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //onGetContacts: {},
      dataStream: [],
      menu: false,
      activeTab: "1",
      breadcrumbItems : [
      { title : "CoinFiz", link : "/" },
      { title : "Trading", link : "#" },
      ]
    };
    this.toggle = this.toggle.bind(this);
    
    this.handleClick = this.handleClick.bind(this);

    this.t_col1 = this.t_col1.bind(this);
    this.t_col2 = this.t_col2.bind(this);
    this.t_col3 = this.t_col3.bind(this);
  }




  _connectSocketStreams(streams) {
    ws.onopen = function open() {
      console.log('connected');
    };

    ws.onmessage = function incoming(data) {
      
      //this.handleClick();
      //console.log(data.data);
      /*
      this.setState({
        onGetContacts: data.data,
      });
      */
      //this.streams(data.data);
      //onGetContacts(data.data);
    };
  }

  async componentDidMount() {
    this._connectSocketStreams()

  /*
  ws.onclose = function close() {
    console.log('disconnected');
  };
  */

  }

  handleClick() {
    console.log('cok');
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  t_col1() {
    this.setState({ col1: !this.state.col1, col2: false, col3: false });
  }
  t_col2() {
    this.setState({ col2: !this.state.col2, col1: false, col3: false });
  }
  t_col3() {
    this.setState({ col3: !this.state.col3, col1: false, col2: false });
  }

  render() {
    const { contacts } = this.props;

    const data = {
      columns: [
        {
          dataField: 'id',
          text: 'No.'
        },
        {
          dataField: "orderId",
          text: "Order ID"
        },
        {
          dataField: "date",
          text: "Date"
        },
        {
          dataField: "billingName",
          text: "Billing Name"
        },
        {
          dataField: "total",
          text: "Total"
        },
        {
          dataField: "status",
          text: "Payment Status"
        },
      ],
      rows: [
        {
          id: 1,
          orderId: "1",
          date: "04 Apr, 2020",
          billingName: "Walter Brown",
          total: "$172",
          status: <div className="badge badge-soft-success font-size-12">Paid</div>,
        },
        {
          id: 2,
          orderId: "2",
          date: "03 Apr, 2020",
          billingName: "Jimmy Barker",
          total: "$165",
          status: <div className="badge badge-soft-warning font-size-12">unpaid</div>,
        },
        {
          id: 3,
          orderId: "3",
          date: "03 Apr, 2020",
          billingName: "Donald Bailey",
          total: "$146",
          status: <div className="badge badge-soft-success font-size-12">Paid</div>,
        },
        {
          id: 4,
          orderId: "4",
          date: "02 Apr, 2020",
          billingName: "Paul Jones",
          total: "$183",
          status: <div className="badge badge-soft-success font-size-12">Paid</div>,
        },
        {
          id: 5,
          orderId: "5",
          date: "04 Apr, 2020",
          billingName: "Walter Brown",
          total: "$172",
          status: <div className="badge badge-soft-danger font-size-12">Chargeback</div>,
        },
        {
          id: 6,
          orderId: "6",
          date: "04 Apr, 2020",
          billingName: "Walter Brown",
          total: "$172",
          status: <div className="badge badge-soft-warning font-size-12">unpaid</div>,
        },
        {
          id: 7,
          orderId: "7",
          date: "04 Apr, 2020",
          billingName: "Walter Brown",
          total: "$172",
          status: <div className="badge badge-soft-success font-size-12">Paid</div>,
        },
        {
          id: 8,
          orderId: "8",
          date: "04 Apr, 2020",
          billingName: "Walter Brown",
          total: "$172",
          status: <div className="badge badge-soft-success font-size-12">Paid</div>,
        },
        {
          id: 9,
          orderId: "9",
          date: "04 Apr, 2020",
          billingName: "Walter Brown",
          total: "$172",
          status: <div className="badge badge-soft-success font-size-12">Paid</div>,
        },
        {
          id: 10,
          orderId: "10",
          date: "04 Apr, 2020",
          billingName: "Walter Brown",
          total: "$172",
          status: <div className="badge badge-soft-warning font-size-12">unpaid</div>,
        },
        {
          id: 11,
          orderId: "11",
          date: "04 Apr, 2020",
          billingName: "Walter Brown",
          total: "$172",
          status: <div className="badge badge-soft-success font-size-12">Paid</div>,
        },
      ]
    };

    const options = {
      //pageStartIndex: 0,
      //hideSizePerPage: false,
      //hidePageListOnlyOnePage: false,
      sizePerPageList:
        [{
          text: '5th', value: 5
        }, {
          text: '10th', value: 10
        }, {
          text: 'All', value: data.rows.length
        }]
    };

    async function tradebuy() {
      //console.info(await binance.futuresLeverage('DOTUSDT', 50));
      //console.info(await binance.futuresMarketBuy('DOTUSDT', 1));
    }

    async function tradesell() {
      //console.info(await binance.futuresLeverage('DOTUSDT', 50));
      //console.info(await binance.futuresMarketSell('DOTUSDT', 1));
    }

    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            <Row>
              <Col xl={9}>
                <TradingViewWidget
                symbol="NASDAQ:AAPL"
                theme={Themes.LIGHT}
                locale="fr"
                autosize
              />
              </Col>
              
              <Col xl={3}>
                <Card style={{padding:10}}>

                <h4 className="card-title mb-2">Terminal</h4>

                <div className="form-check form-switch mb-2" dir="ltr">
                <Input type="checkbox" className="form-check-input" id="customSwitch1" defaultChecked />
                  <Label className="form-check-label" htmlFor="customSwitch1" onClick={(e) => { this.setState({ toggleSwitch: !this.state.toggleSwitch }) }}>Toggle this switch element</Label>
                </div>

                <ButtonGroup className="mb-3">
                    <Button color="success" onClick={() => { tradebuy(); }}>
                      Buy
                    </Button>
                    <Button color="danger" onClick={() => { tradesell(); }}>
                      Sell
                    </Button>
                  </ButtonGroup>

                    <div id="accordion">
                      <Card className="mb-1 shadow-none">
                        <Link to="#" onClick={this.t_col1} style={{ cursor: "pointer" }} className="text-dark" >
                          <CardHeader id="headingOne">
                            <h6 className="m-0 font-14">
                              Terminal
                              <i className={this.state.col1 ? "mdi mdi-minus float-end accor-plus-icon" : "mdi mdi-plus float-end accor-plus-icon"}></i>
                            </h6>
                          </CardHeader>
                        </Link>
                        <Collapse isOpen={this.state.col1}>

                        <div className="form-check mb-2 mt-2">
                        <Input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <Label className="form-check-label" htmlFor="defaultCheck1">
                          Form Checkbox
                        </Label>
                        </div>
                        <div className="form-check">
                        <Input className="form-check-input" type="checkbox" value="" id="defaultCheck2" defaultChecked />
                        <Label className="form-check-label" htmlFor="defaultCheck2">
                          Form Checkbox checked
                        </Label>
                        </div>

                        </Collapse>
                      </Card>
                      <Card className="mb-1 shadow-none">
                        <Link to="#" onClick={this.t_col2} style={{ cursor: "pointer" }} className="text-dark" >
                          <CardHeader id="headingTwo">
                            <h6 className="m-0 font-14">
                              {" "}TP/SL{" "}
                              <i className={this.state.col2 ? "mdi mdi-minus float-end accor-plus-icon" : "mdi mdi-plus float-end accor-plus-icon"}></i>
                            </h6>
                          </CardHeader>
                        </Link>
                        <Collapse isOpen={this.state.col2}>
                          
                        </Collapse>{" "}
                      </Card>
                      <Card className="mb-1 shadow-none">
                        <Link to="#" onClick={this.t_col3} style={{ cursor: "pointer" }} className="text-dark" >
                          <CardHeader id="headingThree">
                            <h6 className="m-0 font-14">
                              DCA
                              <i className={this.state.col3 ? "mdi mdi-minus float-end accor-plus-icon" : "mdi mdi-plus float-end accor-plus-icon"}></i>
                            </h6>
                          </CardHeader>
                        </Link>
                        <Collapse isOpen={this.state.col3}>
                          
                        </Collapse>{" "}
                      </Card>
                    </div>

                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <Card style={{padding:10}}>


                    <Nav tabs>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: this.state.activeTab === "1"
                          })}
                          onClick={() => {
                            this.toggle("1");
                          }}
                        >
                          Posisi
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames({
                            active: this.state.activeTab === "2"
                          })}
                          onClick={() => {
                            this.toggle("2");
                          }}
                        >
                          Riwayat
                        </NavLink>
                      </NavItem>

                    </Nav>

                    <TabContent activeTab={this.state.activeTab}>
                      <TabPane tabId="1">
                        <Row>

                            <CardText>
                            </CardText>

                        </Row>
                      </TabPane>
                      <TabPane tabId="2">
                        <Row>

                            <div className="table-responsive">
                            <BootstrapTable
                              keyField='id'
                              data={data.rows}
                              columns={data.columns}
                              pagination={paginationFactory(options)}
                              responsive
                              bordered={false}
                              striped={false}
                              classes={
                                "table align-middle table-nowrap"
                              }
                              headerWrapperClasses={"thead-light"}
                            />
                            </div>

                        </Row>
                      </TabPane>

                    </TabContent>

                </Card>
              </Col>
            </Row>

          </Container> 
        </div>
      </React.Fragment>
    );
  }
}

export default Terminal;
