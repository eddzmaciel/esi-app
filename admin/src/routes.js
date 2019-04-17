import React from 'react';
import { Redirect } from 'react-router-dom';

// Layout Types
import { DefaultLayout } from './layouts';

// Route Views
import UserProfileLite from './views/UserProfileLite';
import Errors from './views/Errors';
import Dashboard from './views/Dashboard/Index';
import Reports from './views/Reports/Index';
import ReportsForm from './views/Reports/ViewForm';
import Clients from './views/Clients/Index';
import ClientsForm from './views/Clients/ViewForm';
import Providers from './views/Providers/Index';
import ProvidersForm from './views/Providers/ViewForm';
import Quotations from './views/Quotations/Index';
import QuotationsForm from './views/Quotations/ViewForm';
import Services from './views/Services/Index';
import ServicesForm from './views/Services/ViewForm';

export default [
    {
        path: '/',
        exact: true,
        layout: DefaultLayout,
        component: () => <Redirect to="/dashboard" />
    },
    { path: '/dashboard', layout: DefaultLayout, component: Dashboard },
    { path: '/reports', layout: DefaultLayout, component: Reports },
    { path: '/reports-form', layout: DefaultLayout, component: ReportsForm },
    { path: '/clients', layout: DefaultLayout, component: Clients },
    { path: '/clients-form', layout: DefaultLayout, component: ClientsForm },
    { path: '/providers', layout: DefaultLayout, component: Providers },
    {
        path: '/providers-form',
        layout: DefaultLayout,
        component: ProvidersForm
    },
    { path: '/quotations', layout: DefaultLayout, component: Quotations },
    {
        path: '/quotations-form',
        layout: DefaultLayout,
        component: QuotationsForm
    },
    { path: '/services', layout: DefaultLayout, component: Services },
    {
        path: '/services-form',
        layout: DefaultLayout,
        component: ServicesForm
    },
    {
        path: '/errors',
        layout: DefaultLayout,
        component: Errors
    },
    {
        path: '/user-profile',
        layout: DefaultLayout,
        component: UserProfileLite
    }
];
