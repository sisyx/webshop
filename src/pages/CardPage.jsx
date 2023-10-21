import React, { useContext } from 'react';
import styles from './CardPage.module.css';
import { StateContext } from '../Contexts/Conetxts';
import CartProduct from '../components/CartProduct';
import { Navigate, useNavigate } from 'react-router-dom';

function CardPage() {

    const { state, goBack } = useContext(StateContext);
    const { cart } = state
    const navigate = useNavigate();

    const totalPrice = cart.reduce((sum, cur) => sum + (cur.count * cur.price), 0 ).toFixed(2)

    console.log(cart);

    function handleAddToCart(event) {
        navigate('/auth')
    }

    return (
        <div className={styles.parentCardPage}>

            <div className={styles.top_parentCardPage}>

                <div className={styles.title_CardPage}>
                    Your cart items
                </div>

                <div className={styles.des_CardPage}>
                    <a onClick={e => {navigate('/')}} className={styles.a}>Back to Home</a>
                </div>

            </div>

            <div className={styles.middle_parentCardPage}>

                <div className={styles.heading_tab}>

                    <div className={styles.total_parentCardPage}>
                        Total
                    </div>

                    <div className={styles.quantity_parentCardPage}>
                        Quantity
                    </div>

                    <div className={styles.price_parentCardPage}>
                        Price
                    </div>

                    <div className={styles.product_parentCardPage}>
                        Product
                    </div>

                </div>

                <div className={styles.line_parentCardPage}>

                </div>
                {cart.length ? 
                    cart.map(product => 
                        <CartProduct count={product.count} price={product.price} id={product.id} key={`cart_pro${product.id}`} />
                    )
                    : <h1 style={{textAlign: 'center'}}>Yout Cart is Empty</h1>
                }

            </div>
            <div className={styles.line_parentCardPage}>

            </div>

            <div className={styles.down_parentCardPage}>

                <button className={styles.button} onClick={handleAddToCart}>
                    Check-Out
                </button>

                <div className={styles.content_parentCardPage}>

                    <div className={styles.up_content_parentCardPage}>

                        <div className={styles.des_up_content}>
                            Sub-total
                        </div>

                        <div className={styles.price_up_content}>
                            {totalPrice}$
                        </div>

                    </div>

                    <div className={styles.down_content_parentCardPage}>
                        Tax and shipping cost will be calculated later
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardPage