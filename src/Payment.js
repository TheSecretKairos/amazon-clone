import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import './css/Payment.css'
import { useStateValue } from './StateProvider';
import {Link} from 'react-router-dom'

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

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
                    <div className='payment__detailss'>
                        {/* stripe magic will go */}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Payment