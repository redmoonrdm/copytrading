import React, { Component } from "react"
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"

// datatable related plugins
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, {
  PaginationProvider, PaginationListStandalone,
  SizePerPageDropdownStandalone
} from 'react-bootstrap-table2-paginator';

import ToolkitProvider from 'react-bootstrap-table2-toolkit';

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import "../../components/Common/datatables.scss"

// Table data
const products = [
  { "id": 1, "name": "Airi Satou", "position": "Accountant", "office": "Tokyo", "age": "33", "startdate": "2008/11/28", "salary": "$162,700" },
  { "id": 2, "name": "Angelica Ramos", "position": "Chief Executive Officer (CEO)", "office": "London", "age": "47", "startdate": "2009/10/09", "salary": "$1,200,000" },
  { "id": 3, "name": "Ashton Cox", "position": "Junior Technical Author", "office": "San Francisco", "age": "66", "startdate": "2009/01/12", "salary": "$86,000" },
  { "id": 4, "name": "Bradley Greer", "position": "Software Engineer", "office": "London", "age": "41", "startdate": "2012/10/13", "salary": "$132,000" },
  { "id": 5, "name": "Brenden Wagner", "position": "Software Engineer", "office": "San Francisco", "age": "28", "startdate": "2011/06/07", "salary": "$206,850" },
  { "id": 6, "name": "Brielle Williamson", "position": "Integration Specialist", "office": "New York", "age": "61", "startdate": "2012/12/02", "salary": "$372,000" },
  { "id": 7, "name": "Bruno Nash", "position": "Software Engineer", "office": "London", "age": "38", "startdate": "2011/05/03", "salary": "$163,500" },
  { "id": 8, "name": "Caesar Vance", "position": "Pre-Sales Support", "office": "New York", "age": "21", "startdate": "2011/12/12", "salary": "$106,450" },
  { "id": 9, "name": "Cara Stevens", "position": "Sales Assistant", "office": "New York", "age": "46", "startdate": "2011/12/06", "salary": "$145,600" },
  { "id": 10, "name": "Cedric Kelly", "position": "Senior Javascript Developer", "office": "Edinburgh", "age": "22", "startdate": "2012/03/29", "salary": "$433,060" },
  { "id": 11, "name": "Marshall", "position": "Regional Director", "office": "San Francisco", "age": "36", "startdate": "2008/10/16", "salary": "$470,600" },
];

class DatatableTables extends Component {
  constructor(props) {
    super(props)
    this.state = {
      breadcrumbItems: [
        { title: "Tables", link: "#" },
        { title: "Data Table", link: "#" },
      ],
      page: 1,
      sizePerPage: 10,
      productData: products
    }

  }

  render() {

    const columns = [{
      dataField: 'id',
      text: 'Id',
      sort: true,
    }, {
      dataField: 'name',
      text: 'Name',
      sort: true
    }, {
      dataField: 'position',
      text: 'Position',
      sort: true
    }, {
      dataField: 'office',
      text: 'Office',
      sort: true
    }, {
      dataField: 'age',
      text: 'Age',
      sort: true
    }, {
      dataField: 'startdate',
      text: 'Start Date',
      sort: true
    }, {
      dataField: 'salary',
      text: 'Salary',
      sort: true
    }];

    const defaultSorted = [{
      dataField: 'id',
      order: 'asc'
    }];

    const pageOptions = {
      sizePerPage: 10,
      totalSize: products.length, // replace later with size(customers),
      custom: true,
    }

    return (
      <React.Fragment>
        <div className="page-content">
          <div className="container-fluid">
            <Breadcrumbs title="Tables" breadcrumbItems={this.state.breadcrumbItems} />

            <Row>
              <Col className="col-3">
                <Card>
                  <CardBody>

                  </CardBody>
                </Card>
              </Col>
              <Col className="col-9">
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Default Datatable </CardTitle>
                    <p className="card-title-desc">
                      react-bootstrap-table-next plugin has most features enabled by default,
                      so all you need to do to use it with your own tables is to
                      call the construction function:{" "}
                      <code>react-bootstrap-table-next </code>.
                    </p>
                    <PaginationProvider
                      pagination={paginationFactory(pageOptions)}
                      keyField='id'
                      columns={columns}
                      data={this.state.productData}
                    >
                      {({ paginationProps, paginationTableProps }) => (
                        <ToolkitProvider
                          keyField='id'
                          columns={columns}
                          data={this.state.productData}
                        >
                          {toolkitProps => (
                            <React.Fragment>

                              <Row>
                                <Col xl="12">
                                  <div className="table-responsive">
                                    <BootstrapTable
                                      keyField={"id"}
                                      responsive
                                      bordered={false}
                                      striped={false}
                                      defaultSorted={defaultSorted}
                                      classes={
                                        "table align-middle table-nowrap"
                                      }
                                      headerWrapperClasses={"thead-light"}
                                      {...toolkitProps.baseProps}
                                      {...paginationTableProps}
                                    />

                                  </div>
                                </Col>
                              </Row>

                              <Row className="align-items-md-center mt-30">
                                <Col className="inner-custom-pagination d-flex">
                                  <div className="d-inline">
                                    <SizePerPageDropdownStandalone
                                      {...paginationProps}
                                    />
                                  </div>
                                  <div className="text-md-right ms-auto">
                                    <PaginationListStandalone
                                      {...paginationProps}
                                    />
                                  </div>
                                </Col>
                              </Row>
                            </React.Fragment>
                          )
                          }
                        </ToolkitProvider>
                      )
                      }</PaginationProvider>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default DatatableTables