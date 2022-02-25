import React from 'react'
import "./css/CheckoutProduct.css"
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating }) {

    const [{ basket }, dispathc] = useStateValue();

    const removeFromBasket = () =>{
        dispathc({
            type: 'REMOVE_FROM_BASKET',
            id: id,
            
        })
    }

    return (
        <div className='CheckoutProduct'>
            <img className='checkoutProduct__image' src={image} />
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>€</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct__rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>🌟</p>
                        ))
                    }
                </div>
                <button onClick={removeFromBasket}>Rimuovi dal carrello</button>
            </div>
        </div>
    )
}

export default CheckoutProduct