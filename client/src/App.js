import "antd/dist/antd.css";
import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import "./App.css";
import About from "./screens/AboutUs";
import Dashboard from "./screens/Admin/Dashboard";
import AllImage from "./screens/Admin/LibraryImage/AllImage";
import Products from "./screens/Admin/Products/AllProduct";
import OrderDetailAdmin from "./screens/Admin/OrderDetail/OrderDetailAdmin";
import UploadImage from "./screens/Admin/LibraryImage/UploadImage";
import LoginAdmin from "./screens/Admin/LoginAdmin";
import CheckOutCart from "./screens/CheckOutCart";
import Contact from "./screens/Contact";
import HomeScreen from "./screens/HomeScreen";
import EditPasswordScreen from "./screens/MyAccount/EditPasswordScreen";
import MyAccountScreen from "./screens/MyAccount/MyAccountScreen";
import OrdersScreen from "./screens/MyAccount/OrdersScreen";
import OrderDetailsScreen from "./screens/OrderDetailsScreen";
import { PaymentCart } from "./screens/PaymentCart";
import RegistrationScreen from "./screens/RegistrationScreen";
import RegistrationScreen1 from "./screens/RegistrationScreen1";
import Shop from "./screens/Shop";
import Test from "./screens/Test";
import ViewDetailsScreen from "./screens/ViewDetailsScreen";

function App() {
  const { account } = useSelector((state) => state.myaccount);

  return (
    <>
      <BrowserRouter>
        <Route exact={true} path="/admin/products" component={Products} />{" "}
        {/* <Route exact={true} path="/admin/a" component={Products} /> */}
        <Route
          exact={true}
          path="/admin/orderdetail"
          component={OrderDetailAdmin}
        />
        {/* ADMIN */}
        <Route exact={true} path="/admin/loginadmin" component={LoginAdmin} />
        <Route exact={true} path="/admin/dashboard" component={Dashboard} />
        <Route exact={true} path="/admin/allimage" component={AllImage} />
        <Route exact={true} path="/admin/uploadimage" component={UploadImage} />
        {/* End Admin */}
        {account.length > 0 ? (
          <>
            {/* {console.log("account", account)} */}
            <Route
              exact={true}
              path="/my-account/edit-password"
              component={EditPasswordScreen}
            />
            <Route
              exact={true}
              path="/my-account/orders"
              component={OrdersScreen}
            />

            <Route
              exact={true}
              path="/my-account"
              component={MyAccountScreen}
            />
          </>
        ) : (
          <Redirect to="/" />
        )}
        <Route path="/checkoutcart" component={CheckOutCart} />
        <Route path="/test" component={Test} />
        <Route path="/paymentcart" component={PaymentCart} />
        <Route path="/registrationscreen" component={RegistrationScreen} />
        <Route path="/registrationscreen1" component={RegistrationScreen1} />
        <Route
          path="/orderdetailsscreen/:id/:date"
          component={OrderDetailsScreen}
        />
        <Route path="/viewdetail/:id" component={ViewDetailsScreen} />
        {/*Okey*/}
        <Route path="/contact" component={Contact} />
        {/*Okey*/}
        <Route path="/shop" component={Shop} />
        <Route path="/about" component={About} />
        {/*Okey*/}
        <Route path="/" exact={true} component={HomeScreen} /> {/*Okey*/}
        {/* <Route component={PageNotFoundScreen} /> */}
      </BrowserRouter>
      {/* <!-- Load Facebook SDK for JavaScript --> */}
    </>
  );
}

export default App;
