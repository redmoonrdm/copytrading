import React, { Component } from 'react';
import { Col, Card, CardBody } from "reactstrap";

class MiniWidgets extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.reports.map((report, key) =>
                        <Col key={key} md={4}>
                            <Card>
                                <CardBody>
                                    <div className="d-flex">
                                        <div className="flex-1 overflow-hidden">
                                            <p className="text-truncate font-size-14 mb-2">{report.title}</p>
                                            <h4 className="mb-0">{report.value}</h4>
                                        </div>
                                        <div className="text-primary">
                                            <i className={report.icon + " font-size-24"}></i>
                                        </div>
                                    </div>
                                </CardBody>


                            </Card>
                        </Col>
                    )
                }
            </React.Fragment>
        );
    }
}

export default MiniWidgets;