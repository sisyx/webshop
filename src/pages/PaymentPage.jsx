import React, { useContext } from 'react';
import styles from './PaymentPage.module.css'
import { StateContext } from '../Contexts/Conetxts';
import { useNavigate } from 'react-router-dom';
import Steps from '../components/Steps';
import CartJr from '../components/CartJr';

function PaymentPage() {
    const { state, goBack, dispatch } = useContext(StateContext);
    const { cart } = state
    const firstProduct = cart.at(0);
    const totalPrice = cart.reduce((sum, cur) => sum + (cur.price * cur.count),0).toFixed(2);

    const navigate = useNavigate();

    function goToNext(event) {
        const allInputs = document.querySelectorAll(`.${styles.parent_leftpaymentPage} input`);
        
        for (let i = 0; i < allInputs.length; i++) {
            if (!allInputs[i].value) {
                alert('You must fill all inputs')
                return
            }
        }
        navigate('/webshop/thanks')
    }


    return (
        <div className={styles.parent_paymentPage}>

            <CartJr cls={styles.cartjr} mbcls={styles.mbcartjr} />

            <div className={styles.leftpaymentPage}>

                <div className={styles.parent_leftpaymentPage}>

                    <Steps step={4} cls={styles.steps} />
                    <div className={styles.summaryInfo_pay}>

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

                        <div className={styles.line_ShippingPage}></div>


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


                    </div>

                    <div className={styles.credit_card}>

                        <div className={styles.up_credit}>

                            <div className={styles.title_credit}>
                                Payment method
                            </div>

                        </div>

                        <div className={styles.down_credit}>

                            <div className={styles.bg_credit}>

                                <div className={styles.icon_bg_credit}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                        <path d="M0 7.75C0 6.72229 0.408258 5.73666 1.13496 5.00996C1.86166 4.28326 2.84729 3.875 3.875 3.875H27.125C28.1527 3.875 29.1383 4.28326 29.865 5.00996C30.5917 5.73666 31 6.72229 31 7.75V9.6875H0V7.75Z" fill="#56B280" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 13.5625V23.25C0 24.2777 0.408258 25.2633 1.13496 25.99C1.86166 26.7167 2.84729 27.125 3.875 27.125H27.125C28.1527 27.125 29.1383 26.7167 29.865 25.99C30.5917 25.2633 31 24.2777 31 23.25V13.5625H0ZM5.8125 17.4375C5.29864 17.4375 4.80583 17.6416 4.44248 18.005C4.07913 18.3683 3.875 18.8611 3.875 19.375V21.3125C3.875 21.8264 4.07913 22.3192 4.44248 22.6825C4.80583 23.0459 5.29864 23.25 5.8125 23.25H7.75C8.26386 23.25 8.75667 23.0459 9.12002 22.6825C9.48337 22.3192 9.6875 21.8264 9.6875 21.3125V19.375C9.6875 18.8611 9.48337 18.3683 9.12002 18.005C8.75667 17.6416 8.26386 17.4375 7.75 17.4375H5.8125Z" fill="#56B280" />
                                    </svg>
                                </div>

                                <div className={styles.text_bg_credit}>
                                    Credit Card
                                </div>
                            </div>

                            <div className={styles.inputs_credit}>

                                <div className={styles.input_Card}>

                                    <input placeholder="Card Number" className={styles.inputs} type="text" />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className={styles.svg_icone}>
                                        <path d="M2.8125 10.125C2.8125 9.52826 3.04955 8.95597 3.47151 8.53401C3.89347 8.11205 4.46576 7.875 5.0625 7.875H12.9375C13.5342 7.875 14.1065 8.11205 14.5285 8.53401C14.9504 8.95597 15.1875 9.52826 15.1875 10.125V15.75C15.1875 16.3467 14.9504 16.919 14.5285 17.341C14.1065 17.7629 13.5342 18 12.9375 18H5.0625C4.46576 18 3.89347 17.7629 3.47151 17.341C3.04955 16.919 2.8125 16.3467 2.8125 15.75V10.125Z" fill="#616161" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.0625 4.5C5.0625 3.45571 5.47734 2.45419 6.21577 1.71577C6.95419 0.977343 7.95571 0.5625 9 0.5625C10.0443 0.5625 11.0458 0.977343 11.7842 1.71577C12.5227 2.45419 12.9375 3.45571 12.9375 4.5V7.875H11.8125V4.5C11.8125 3.75408 11.5162 3.03871 10.9887 2.51126C10.4613 1.98382 9.74592 1.6875 9 1.6875C8.25408 1.6875 7.53871 1.98382 7.01126 2.51126C6.48382 3.03871 6.1875 3.75408 6.1875 4.5V7.875H5.0625V4.5Z" fill="#616161" />
                                    </svg>



                                </div>

                                <div className={styles.input_Card}>

                                    <input placeholder="Holder Name" className={styles.inputs} type="text" />

                                </div>

                                <div className={styles.sec_Expiration__cvv}>

                                    <div className={styles.input_Expiration}>

                                        <input placeholder="Expiration (MM/YY)" className={styles.small_inputs} type="text" />

                                    </div>

                                    <div className={styles.input_cvv}>

                                        <input placeholder="cvv" className={styles.small_inputs} type="text" />
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className={styles.svg_icone}>
                                            <g clip-path="url(#clip0_116_487)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.25C0 1.65326 0.237053 1.08097 0.65901 0.65901C1.08097 0.237053 1.65326 0 2.25 0L15.75 0C16.3467 0 16.919 0.237053 17.341 0.65901C17.7629 1.08097 18 1.65326 18 2.25V15.75C18 16.3467 17.7629 16.919 17.341 17.341C16.919 17.7629 16.3467 18 15.75 18H2.25C1.65326 18 1.08097 17.7629 0.65901 17.341C0.237053 16.919 0 16.3467 0 15.75V2.25ZM10.0463 7.4115L7.47 7.73438L7.37775 8.16187L7.884 8.25525C8.21475 8.334 8.28 8.45325 8.208 8.78288L7.37775 12.6844C7.1595 13.6935 7.49588 14.1683 8.28675 14.1683C8.89988 14.1683 9.612 13.8848 9.93488 13.4955L10.0339 13.0275C9.80888 13.2255 9.48037 13.3043 9.26213 13.3043C8.95275 13.3043 8.84025 13.0871 8.92013 12.7046L10.0463 7.4115ZM9 6.1875C9.29837 6.1875 9.58452 6.06897 9.7955 5.858C10.0065 5.64702 10.125 5.36087 10.125 5.0625C10.125 4.76413 10.0065 4.47798 9.7955 4.267C9.58452 4.05603 9.29837 3.9375 9 3.9375C8.70163 3.9375 8.41548 4.05603 8.2045 4.267C7.99353 4.47798 7.875 4.76413 7.875 5.0625C7.875 5.36087 7.99353 5.64702 8.2045 5.858C8.41548 6.06897 8.70163 6.1875 9 6.1875Z" fill="#616161" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_116_487">
                                                    <rect width="18" height="18" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className={styles.taxInfo}>
                        <div className={styles.title_taxInfo}>
                            Tax Informations
                        </div>

                        <div className={styles.VAT_numberInput}>

                            <input placeholder="Holder Name" className={styles.inputs} type="text" />

                        </div>

                        <div className={styles.pec_input}>

                            <input placeholder="Holder Name" className={styles.inputs} type="text" />

                        </div>

                    </div>

                    <div className={styles.billding_address}>

                        <div className={styles.title_Billding}>
                            Billing address
                        </div>

                        <div className={styles.bgBillding_check}>

                            <div className={styles.downMethod_ShippingPage}>

                                <div className={styles.checkbox_rounded_shipping}>
                                    <label className={styles.container}>
                                        <input type="checkbox" />
                                        <div className={styles.checkmark}></div>
                                    </label>
                                </div>

                                <div className={styles.textType_shipping}>
                                    Same as the shipping address
                                </div>

                            </div>

                            <div className={styles.line_paymentpage}></div>


                            <div className={styles.downMethod_ShippingPage}>

                                <div className={styles.checkbox_rounded_shipping}>
                                    <label className={styles.container}>
                                        <input type="checkbox"/>
                                        <div className={styles.checkmark}></div>
                                    </label>
                                </div>

                                <div className={styles.textType_shipping}>
                                    Use a different address for billing
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className={styles.backButton_Billding}>

                        <div className={styles.back_to_card} onClick={goBack}>
                            <a href="#">go Back</a>
                        </div>

                        <div className={styles.button_shipping}>

                            <button className={styles.button} onClick={goToNext}>PayNow</button>

                        </div>

                    </div>


                </div>




            </div>
        </div>
    )
}

export default PaymentPage