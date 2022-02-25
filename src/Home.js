import React from 'react'
import "./css/Home.css"
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home__image'
                    src=
                    //"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    //"https://m.media-amazon.com/images/I/81NLYzGDSNL._SX3000_.jpg"
                    "https://m.media-amazon.com/images/I/61a-GMqZq+L._SX3000_.jpg"
                    alt=""
                />

                <div className='home__row'>
                    <Product
                        id="12321341"
                        title="The lean startup"
                        price={29.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                        rating={5}
                    />
                    <Product
                        id="49538094"
                        title="Kenwood kMix Stand for baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"

                    />
                </div>
                <div className='home__row'>
                    <Product
                        id="4903850"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/81rus0UFhsL._AC_SL1500_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/61u48FEs0rL._AC_SL1000_.jpg"
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128 GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81IoKy84zVS._AC_SL1500_.jpg"
                    />
                </div>
                <div className='home__row'>
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81rus0UFhsL._AC_SL1500_.jpg"
                    />
                </div>

            </div>
        </div>
    )
}

export default Home