import React, { useContext, useEffect } from 'react';
import styles from  './Popular.module.css';
import Img from './Img';
import { StateContext } from '../Contexts/Conetxts';
import { Link } from 'react-router-dom';

function Popular() {

    const { state } = useContext(StateContext);

    const { products } = state 

    // useEffect(function () {
    //     console.log(state);
    // }, [])
    return (
        <div className={styles.parentPopular}>

            <div className={styles.upPopular}>

                <div className={styles.title_Popular}>
                    Popular
                </div>

                <div className={styles.des_Popular}>
                    Our top selling product that you may like
                </div>
            </div>

            <div className={styles.downPopular}>

                {
                    products
                    .slice(0, 4)
                    .map(product => 

                        <Link className={styles.productCard_Popular} to={`/product?id=${product.id}`}  key={`popP${product.id}`}>

                            <Img src="/images/image 3.svg" />

                            <div className={styles.price_productCard}>

                                <div className={styles.subjectProductCard}>
                                    {product.name}
                                </div>

                                <div className={styles.memberProductCard}>
                                    {product.price}$
                                </div>
                            </div>

                        </Link>
                        )
                }

            </div>

        </div>
    )
}

export default Popular