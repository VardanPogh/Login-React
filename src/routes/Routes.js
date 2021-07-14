import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <ProtectedRoute exact={true} path="/" component={Dashboard} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
