import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

class PrivateRoute extends Component {
    render() {
        return (
            <div>
                {sessionStorage.getItem("authToken")
                    ? <Route path={this.props.path} component={this.props.component} />
                    : <Redirect to="login" />}
            </div>
        );
    }
}

export default PrivateRoute; 