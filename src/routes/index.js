import React from "react";
import { Redirect } from "react-router-dom";
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Dashboard from "../pages/Dashboard/index";
import Trade from "../pages/Trade/index";
import Copy from "../pages/Copy/index";
import Position from "../pages/Position/index";
import Asset from "../pages/Asset/index";
import Bots from "../pages/Bots/index";
import Signals from "../pages/Signals/index";

import Trader from "../pages/Copy/trader";

const authProtectedRoutes = [
	{ path: "/dashboard", component: Dashboard },
	{ path: "/trade", component: Trade },
	{ path: "/copy", component: Copy },
	{ path: "/position", component: Position },
	{ path: "/asset", component: Asset },
	{ path: "/bots", component: Bots },
	{ path: "/signals", component: Signals },

	{ path: "/trader/:id", component: Trader },
	// this route should be at the end of all other routes
	{ path: "/", exact: true, component: () => <Redirect to="/dashboard" /> }
];

const publicRoutes = [
	{ path: "/logout", component: Logout },
	{ path: "/login", component: Login },
];

export { authProtectedRoutes, publicRoutes };
