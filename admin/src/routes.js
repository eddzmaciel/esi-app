import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views

import UserProfileLite from "./views/UserProfileLite";

import Errors from "./views/Errors";

import Dashboard from "./views/Dashboard/Index";
import Reports from "./views/Reports/Index";
import ReportsForm from "./views/Reports/ViewForm";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/dashboard" />
  },
  { path: "/dashboard", layout: DefaultLayout, component: Dashboard },
  { path: "/reports", layout: DefaultLayout, component: Reports },
  { path: "/reports-form", layout: DefaultLayout, component: ReportsForm },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  }
];
