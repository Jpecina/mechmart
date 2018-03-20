import React, { Component } from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import swal from "sweetalert";
import { Link, withRouter } from "react-router-dom";

const STRIPE_PLUBLISHABLE = "pk_test_u1TUgTCY8tX2jhpsH4LyIo5L";
const PAYMENT_SERVER_URL = "/api/Pay";
const CURRENCY = "USD";

const fromUsdCent = amount => amount * 100;

class Order extends Component {
  successPayment = data => {
    alert("Payment Success!");
  };

  errorPayment = data => {
    alert("OOPS payment error");
  };
  onToken = (amount, description) => token =>
    axios
      .post(PAYMENT_SERVER_URL, {
        description,
        source: token.id,
        currency: CURRENCY,
        amount: fromUsdCent(amount)
      })
      .then(response => {
        let newString = JSON.parse(response.request.response);
        console.log(newString.success.source);
        console.log(response.request, "stripe response");
        swal("Order Confirmed , Thank You for Your Purchase  ");
        console.log(this.props);
        this.props.history.push(`/OrderHistory`);
        let tempres = newString.success.source;


        let tempcity = tempres.address_city;
        let tempaddress = tempres.address_line1;
        let tempstate = tempres.address_state;
        let tempzip = tempres.address_zip;
        let tempcountry = tempres.address_country;
        
      });
      redirect(){

      }
  render() {
    const { name, description, amount } = this.props;
    return (
      <StripeCheckout
        name={name}
        description={description}
        amount={fromUsdCent(amount)}
        token={this.onToken(amount, description)}
        currency={CURRENCY}
        stripeKey={STRIPE_PLUBLISHABLE}
        shippingAddress
        billingAddress={true}
      >
      </StripeCheckout>
    );
  }
}
export default withRouter(Order);