import React, { useContext } from 'react';
import styles from './ShippingPage.module.css';
import { StateContext } from '../Contexts/Conetxts';
import { useNavigate } from 'react-router-dom';
import Steps from '../components/Steps';
import CartJr from '../components/CartJr';

function ShippingPage() {

    const { state } = useContext(StateContext);
    const { cart } = state
    const firstProduct = cart.at(0);
    const totalPrice = cart.reduce((sum, cur) => sum + (cur.price * cur.count),0).toFixed(2);

    const navigate = useNavigate();

    function goToNext(event) {
        navigate('/payment')
    }
    return (
        <div className={styles.parent_ShippingPage}>

            <CartJr cls={styles.cartjr} mbcls={styles.mbcartjr} />

            <div className={styles.leftParent_ShippingPage}>

                <div className={styles.left_ShippingPage}>

                    <Steps step={3} />

                    <div className={styles.summaryInfo_ShippingPage}>

                        <div className={styles.parent_summaryInfo}>

                            <div className={styles.contact_shipping}>
                                Contact
                            </div>

                            <div className={styles.email_shipping}>
                                joe.spagnuolo@uxbly.com
                            </div>

                            <div className={styles.edit_shipping}>
                                Edit
                            </div>

                        </div>

                        <div className={styles.line_shipping}></div>

                        <div className={styles.parent_summaryInfo}>

                            <div className={styles.ship_shipping}>
                                Ship to
                            </div>

                            <div className={styles.address_shipping}>
                                Via Firenze 23, 92023, Campobello di  Licata AG, Italia
                            </div>

                            <div className={styles.edit_shipping}>
                                Edit
                            </div>

                        </div>


                    </div>

                    <div className={styles.shippingMethod_ShippingPage}>

                        <div className={styles.upMethod_ShippingPage}>
                            Shipping method
                        </div>

                        <div className={styles.downMethod_ShippingPage}>

                            <div className={styles.checkbox_rounded_shipping}>
                                <label class="container">
                                    <input type="checkbox"/>
                                    <div class="checkmark"></div>
                                </label>
                            </div>

                            <div className={styles.textType_shipping}>
                                Standard Shipping
                            </div>

                            <div className={styles.priceMethod_shippping}>
                                Free
                            </div>

                        </div>

                    </div>

                    <div className={styles.backButton_ShippingPage}>

                        <div className={styles.back_to_card} onClick=''>
                            Back to cart
                        </div>

                        <div className={styles.button_shipping}>
                            <button className={styles.button} onClick={goToNext}>
                                Finish Payment
                            </button>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ShippingPage