import React, { useEffect, useState } from 'react'
import CheckoutProduct from './CheckoutProduct';
import './css/Payment.css'
import { useStateValue } from './StateProvider';
import { Link, useHistory } from 'react-router-dom'
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from "./reducer"
import axios from './axios';


function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeded, setSucceded] = useState(false);
    const [processing, setProcessing] = useState("");

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        //generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    const handleSubmit = async (event) => {
        //do all the stripe fancy stuff
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement
                )
            }
        }).then(({ paymentIntent }) => {
            //paymentIntend= payment confirmation
            setSucceded(true);
            setError(null)
            setProcessing(false)

            history.replace('/orders');
        })
    }

    const handleChange = event => {

        //Listen for cahnges in the CardElement
        //and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.errpr.message : "");
    }

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (
                    <Link to="/checkout">{basket?.length} items</Link>
                    )
                </h1>



                {/* Payment section - delivery address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>Corso Como, 123</p>
                        <p>Milano, MI</p>
                    </div>
                </div>
                {/* Payment section - review items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Riepilogo articoli e spedizione</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/* Payment section - payment method */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment method</h3>
                    </div>
                    <div className='payment__details'>
                        {/* stripe magic will go */}

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className='payment__priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>Totale Ordine: {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    pprefix={"€"}
                                />
                                <button disabled={processing || disabled || succeded}
                                >
                                    <span>{processing ? <p>Processing</p> : "Compra ora"}
                                    </span>
                                </button>
                            </div>
                            {/* Errors */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment