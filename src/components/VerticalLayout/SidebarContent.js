import React, { Component } from "react";

// MetisMenu
import MetisMenu from "metismenujs";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

//i18n
import { withNamespaces } from 'react-i18next';

import { connect } from "react-redux";
import {
    changeLayout,
    changeLayoutWidth,
    changeSidebarTheme,
    changeSidebarType,
    changePreloader
} from "../../store/actions";

class SidebarContent extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };

    }

    componentDidMount() {
        this.initMenu();
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {

            if (this.props.type !== prevProps.type) {
                this.initMenu();
            }

        }
    }

    initMenu() {
        new MetisMenu("#side-menu");

        var matchingMenuItem = null;
        var ul = document.getElementById("side-menu");
        var items = ul.getElementsByTagName("a");
        for (var i = 0; i < items.length; ++i) {
            if (this.props.location.pathname === items[i].pathname) {
                matchingMenuItem = items[i];
                break;
            }
        }
        if (matchingMenuItem) {
            this.activateParentDropdown(matchingMenuItem);
        }
    }

    activateParentDropdown = item => {
        item.classList.add("active");
        const parent = item.parentElement;

        if (parent) {
            parent.classList.add("mm-active");
            const parent2 = parent.parentElement;

            if (parent2) {
                parent2.classList.add("mm-show");

                const parent3 = parent2.parentElement;

                if (parent3) {
                    parent3.classList.add("mm-active"); // li
                    parent3.childNodes[0].classList.add("mm-active"); //a
                    const parent4 = parent3.parentElement;
                    if (parent4) {
                        parent4.classList.add("mm-active");
                    }
                }
            }
            return false;
        }
        return false;
    };

    render() {
        return (
            <React.Fragment>
                <div id="sidebar-menu">

                    <ul className="metismenu list-unstyled" id="side-menu">
                        
                        <li>
                            <Link to="/dashboard" className="waves-effect">
                                <i className="ri-apps-line"></i>
                                <span className="ms-1">RedBoard</span>
                            </Link>
                        </li>

                        <li className="menu-title">Trading</li>

                        <li>
                            <Link to="/copy" className="waves-effect">
                                <i className="ri-cup-line"></i>
                                <span className="ms-1">Copy</span>
                            </Link>
                        </li>
                        
                        <li>
                            <Link to="/trade" className="waves-effect">
                                <i className="ri-sword-line"></i>
                                <span className="ms-1">Trade</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/position" className="waves-effect">
                                <i className="ri-stock-line"></i>
                                <span className="ms-1">Position</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/asset" className="waves-effect">
                                <i className="ri-coins-line"></i>
                                <span className="ms-1">Asset</span>
                            </Link>
                        </li>

                        <li className="menu-title">Robot</li>

                        <li>
                            <Link to="/bots" className="waves-effect">
                                <i className="ri-robot-line"></i>
                                <span className="ms-1">Bots</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/signals" className="waves-effect">
                                <i className="ri-base-station-fill"></i>
                                <span className="ms-1">Signals</span>
                            </Link>
                        </li>

                        <li className="menu-title">Pages</li>

                        <li>
                            <Link to="/#" className="waves-effect">
                                <i className="ri-artboard-2-line"></i>
                                <span className="ms-1">Docs</span>
                            </Link>
                        </li>

                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {
    return { ...state.Layout };
};

export default withRouter(connect(mapStatetoProps, {
    changeLayout,
    changeSidebarTheme,
    changeSidebarType,
    changeLayoutWidth,
    changePreloader
})(withNamespaces()(SidebarContent)));
