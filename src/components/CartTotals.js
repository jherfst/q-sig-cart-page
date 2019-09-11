import React, { Component } from 'react'
// import {BrowserRouter as Router, Link} from 'react-router-dom';
import PayPalButton from './PayPalButton';

export default class CartTotals extends Component {
    render() {
        const {cartSubTotal,cartTax, cartTotal,clearCart} = this.props && this.props.value;
        return (
           <React.Fragment>
               <div className="container">
                   <div className="row">
                       <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                                    <button onClick={() => clearCart()} type="button" className="btn btn-outline-danger text-uppercase mb-3 px-5">
                                        clear cart
                                    </button>
                            <h5>
                                <span className="text-title">
                                    subtotal:
                                </span>
                                <strong>${cartSubTotal}</strong>
                            </h5>
                            <h5>
                                <span className="text-title">
                                    tax:
                                </span>
                                <strong>${cartTax}</strong>
                            </h5>
                            <h5>
                                <span className="text-title">
                                    total:
                                </span>
                                <strong>${cartTotal}</strong>
                            </h5>
                            <PayPalButton
                                total={cartTotal}
                                clearCart={clearCart}
                                history={this.props.history}
                            />
                       </div>
                   </div>
               </div>
           </React.Fragment>
        );
    }
}
