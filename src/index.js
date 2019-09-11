import React, { Component } from 'react';
import Title from './components/Title';
import CartColumns from './components/CartColumns';
import EmptyCart from './components/EmptyCart';
import {ProductConsumer} from 'q-sig-context';
import CartList from './components/CartList';
import CartTotals from './components/CartTotals';
export default class Cart extends Component {
    render() {
        return (
            <section className="back-white">
                { <ProductConsumer>
                    {value => {
                         const cart = value && value.cart;
                        return (cart && cart.length > 0) ? (
                            <React.Fragment>
                                <Title name="your" title="cart"/>
                                <CartColumns/>
                                <CartList value={value} />
                                <CartTotals
                                value={value}
                                history={this.props.history}
                                />
                            </React.Fragment>
                        ) : <EmptyCart/>;
                    }}
                </ProductConsumer>}
            </section>
        )
    }
}
