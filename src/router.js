import React from "react";
import {Route, Redirect} from "react-router-dom";
import {ConnectedRouter} from "connected-react-router";
import {connect} from "react-redux";
import App from "./containers/App/App";
import asyncComponent from "./helpers/AsyncFunc";
import {emptyCache, isFullLocalStorage} from "./helpers/utility";
// import AppCanBo from "./customApp/containers/DashboardCanBo/index"

const localStorageNotNull = isFullLocalStorage();

const RestrictedRoute = ({component: Component, isLoggedIn, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/signin",
            state: {from: props.location}
          }}
        />
      )
    }
  />
);
const PublicRoutes = ({history, isLoggedIn}) => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Route
          exact
          path={"/"}
          component={asyncComponent(() => import("./customApp/containers/HeThong/DangNhap"))}
        />
        <Route
          exact
          path={"/404"}
          component={asyncComponent(() => import("./containers/Page/404"))}
        />
        <Route
          exact
          path={"/500"}
          component={asyncComponent(() => import("./containers/Page/500"))}
        />
         <Route
          exact
          path={"/signin"}
          component={asyncComponent(() => import("./customApp/containers/HeThong/DangNhap"))}
        />
        {/* <Route
          exact
          path={"/signup"}
          component={asyncComponent(() => import("./containers/Page/signup"))}
        />
        <Route
          exact
          path={"/quen-mat-khau"}
          component={asyncComponent(() =>
            import("./customApp/containers/QuenMatKhau")
          )}
        />
        <Route
          exact
          path={"/forgotpassword"}
          component={asyncComponent(() =>
            import("./containers/Page/forgotPassword")
          )}
        />  */}
        <Route
          exact
          path={"/resetpassword"}
          component={asyncComponent(() =>
            import("./containers/Page/resetPassword")
          )}
        />
        <RestrictedRoute
          path="/dashboard"
          component={App}
          isLoggedIn={isLoggedIn}
        />
        {/*<RestrictedRoute*/}
        {/*  path="/staff"*/}
        {/*  component={AppCanBo}*/}
        {/*  isLoggedIn={isLoggedIn}*/}
        {/*/>*/}
      </div>
    </ConnectedRouter>
  );
};

export default connect(state => ({
  isLoggedIn: state.Auth.user !== null || localStorageNotNull
  //da dang nhap khi co reduce idToken hoac co localStore
}))(PublicRoutes);
