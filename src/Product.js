import React from 'react'
import "./css/Product.css"
import { useStateValue } from './StateProvider'

function Product({ id, title, image, price, rating }) {

  const [{basket},dispathc] = useStateValue();

  //console.log("questo è il carrello >>",basket)

  const addToBasket = () => {
    //dispathc the item into the data-layer 
    dispathc({
      type: 'ADD_TO_BASKET',
      item: {
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating,
      },
    });
  };

  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>€</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating).fill().map((_, i) => (
            <p>🌟</p>
          ))}

        </div>
      </div>
      <img src={image}
      />

      <button onClick={addToBasket}>Aggiungi al carrello</button>
    </div>
  )
}

export default Product