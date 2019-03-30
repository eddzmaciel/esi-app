import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views

import UserProfileLite from "./views/UserProfileLite";

import Errors from "./views/Errors";

import Dashboard from "./views/Dashboard/Index";
import Studies from "./views/Studies/Index";
import StudiesForm from "./views/Studies/ViewForm";
import StudyPreview from "./views/Studies/StudyPreview";
export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/dashboard" />
  },
  { path: "/dashboard", layout: DefaultLayout, component: Dashboard },
  { path: "/studies", layout: DefaultLayout, component: Studies },
  { path: "/studies-form", layout: DefaultLayout, component: StudiesForm },
  {
    path: "/studies-preview",
    layout: DefaultLayout,
    component: StudyPreview
  },
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
