import React, { useContext } from 'react';
import styles from './HomeProduct.module.css';
import { Link } from 'react-router-dom';
import { StateContext } from '../Contexts/Conetxts';
import Img from './Img';
export default function HomeProduct({dispatch}) {

    const {state} = useContext(StateContext);

    const products = state.products

    const productsLength = products.length
    const topProducts = products.slice(0, productsLength/2)
    const bottomProducts = products.slice(productsLength/2, productsLength)

    return (
    <>
        <div className={styles.products}>
            <div className={styles.sectionProducts}>

                <div className={styles.titleProducts}>
                    Products
                </div>
                <div className={styles.decProducts}>
                    Order it for you or for your beloved ones
                </div>

                <div className={styles.contentProducts}>

                    <div className={styles.upProducts}>
                        {
                        
                            topProducts.map((product, index) => 

                                <Link className={styles.productCard} to={`/product?id=${product.id}`} key={`hp${index + 5}`}>
                                    <div className={styles.upProductCard}>
                                        <Img src={product.imgSrc} />
                                    </div>

                                    <div className={styles.downProductCard}>
                                        <div className={styles.textProductCard}>{product.name}</div>
                                        <div className={styles.priceProductCard}>${product.price}</div>
                                    </div>
                                </Link>
                            )

                        }
                    </div>

                    <div className={styles.downProducts}>

                        {
                            bottomProducts.map((product, index) => 
                                <Link className={styles.productCard} to={`/product?id=${product.id}`} key={`hp${index + 5}`}>
                                    <div className={styles.upProductCard}>
                                        <Img src={product.imgSrc} />
                                    </div>

                                    <div className={styles.downProductCard}>
                                        <div className={styles.textProductCard}>{product.name}</div>
                                        <div className={styles.priceProductCard}>${product.price}</div>
                                    </div>                        
                                </Link>
                            )
                        }

                    </div>

                </div>

            </div>
        </div>
    </>
    )
    }