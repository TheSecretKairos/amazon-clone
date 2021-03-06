import React from 'react'
import "./css/Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';



function Subtotal() {
    const history = useHistory();
    const [{ basket }, dispathc] = useStateValue();
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} prodotti): <strong>{value}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type="checkbox" /> Questo ordine contiene un regalo
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"€"}
            />
            <button onClick={e => history.push('/payment')}>Proced to Checkout</button>
        </div>
    )
}

export default Subtotal