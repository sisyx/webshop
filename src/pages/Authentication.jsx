import React, { useContext } from 'react';
import styles from "./Authentication.module.css";
import { StateContext } from '../Contexts/Conetxts';
import { useNavigate } from 'react-router-dom';
import Steps from '../components/Steps';
import CartJr from '../components/CartJr';

function Authentication() {

    const { state, goBack } = useContext(StateContext);
    const { cart } = state
    const navigate = useNavigate();
    const selectedProduct = cart.at(0)

    const totalPrice = cart.reduce((sum, cur) => sum+(cur.price * cur.count), 0).toFixed(2)

    function checkFullInput(event) {
        const elm = event.target;
        if (!elm.value) {
            elm.classList.add(styles.not_full_input);
            setTimeout(() => {
                elm.classList.remove(styles.not_full_input);
            },1500)
        } else {
            elm.classList.remove(styles.not_full_input);
        }
    }

    function goToShipping(event) {
        const allInputs = document.querySelectorAll(`.${styles.left_Authentication} input[type="text"]`)
        console.log(allInputs);
        for (let i = 0; i < allInputs.length; i++) {
            if (!allInputs[i].value) {
                alert('you must fill all inputs')
                return
            }
        }
        navigate('/shipping')
    }

    return (

        <div className={styles.parent_Authentication} dir='rtl'>

            <CartJr />

            <div className={styles.left_Authentication}>

                <div className={styles.parent_left_Authentication}>

                    <Steps step={2} />

                    <div className={styles.parent_contact}>

                        <div className={styles.sec_title_auth}>
                            <div className={styles.title_auth}>
                                Contact
                            </div>

                            {/* <div className={styles.login_auth}>
                            </div> */}
                            <div className={styles.Khode_login_auth}>
                                <span className={styles.login_auth}>?Do you have an account</span>
                                <a href="#">Login</a>
                            </div>
                        </div>

                        <div className={styles.sec_input_big}>

                            <input placeholder="Email or mobile phone number" className={`${styles.input_style} ${styles.input}`} type="text" onChange={checkFullInput} />

                        </div>

                        <div className={styles.sec_Check_auth}>

                            <div className={styles.text_Check_auth}>
                                Add me to Candleaf newsletter for a 10% discount
                            </div>

                            <div className={styles.check_box}>
                                <label className={styles.container}>
                                    <input type="checkbox" onChange={checkFullInput} className={styles.input} />
                                    <div className={styles.checkmark}></div>
                                </label>
                            </div>

                        </div>


                    </div>

                    <div className={styles.parent_shipingAddress}>

                        <div className={styles.shipping_title}>
                            Shipping Address
                        </div>

                        <div className={styles.inputName_shipping}>

                            <div className={styles.input_shipping}>

                                <input placeholder="Name" className={`${styles.input_style} ${styles.input}`} type="text" onChange={checkFullInput} />

                            </div>

                            <div className={styles.input_shipping}>

                                <input placeholder="Family" className={`${styles.input_style} ${styles.input}`} type="text" onChange={checkFullInput} />

                            </div>

                        </div>

                        <div className={styles.inputAddress_shipping}>

                            <input placeholder="Address and number" className={`${styles.input_style} ${styles.input}`} type="text" onChange={checkFullInput} />

                        </div>

                        <div className={styles.inputNote_shipping}>

                            <input placeholder="Shipping note (optional)" className={`${styles.input_style} ${styles.input}`} type="text" onChange={checkFullInput} />

                        </div>

                        {/* <div className={styles.inputCity_shipping}>

                            <input placeholder="City" className={`${styles.input_style} ${styles.input}`} type="text" onChange={checkFullInput} />

                            <input placeholder="Postal Code" className={`${styles.input_style} ${styles.input}`} type="text" onChange={checkFullInput} />

                            <div className={styles.dropdown_Province}>
                                <input placeholder="Previence" className={`${styles.input_style} ${styles.input}`} type="text" onChange={checkFullInput} />
                                <div className={styles.icon_dropdown}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                        <path d="M0.939969 2.81554C0.980609 2.7748 1.02889 2.74248 1.08204 2.72042C1.13519 2.69836 1.19217 2.68701 1.24972 2.68701C1.30727 2.68701 1.36425 2.69836 1.4174 2.72042C1.47052 2.74246 1.51878 2.77477 1.5594 2.81548L1.55937 2.81544L1.47098 2.90381L1.55947 2.81554L0.939969 2.81554ZM0.939969 2.81554L1.02847 2.90382L0.939969 2.81554ZM5.11949 7.16427L5.1674 7.27972C5.11425 7.30177 5.05727 7.31313 4.99972 7.31313C4.94217 7.31313 4.88519 7.30177 4.83204 7.27972C4.77894 7.25768 4.7307 7.2254 4.69008 7.18471C4.69004 7.18467 4.69001 7.18463 4.68997 7.1846L0.940193 3.43482C0.940168 3.4348 0.940143 3.43477 0.940119 3.43475L5.11949 7.16427ZM5.11949 7.16427L5.1674 7.27972C5.2205 7.25768 5.26874 7.2254 5.30936 7.18471L5.11949 7.16427ZM8.44007 2.81544L4.99972 6.2564L5.30947 7.1846L9.05936 3.43471C9.10002 3.39405 9.13228 3.34577 9.15428 3.29264C9.17629 3.23952 9.18761 3.18257 9.18761 3.12507C9.18761 3.06757 9.17629 3.01062 9.15428 2.9575C9.13228 2.90437 9.10002 2.85609 9.05936 2.81543C9.0187 2.77477 8.97042 2.74251 8.9173 2.72051C8.86417 2.6985 8.80723 2.68718 8.74972 2.68718C8.69221 2.68718 8.63527 2.6985 8.58215 2.72051L8.62998 2.83599L8.58214 2.72051C8.52902 2.74251 8.48074 2.77477 8.44008 2.81543L8.44007 2.81544Z" fill="#1D252C" stroke="#1D252C" stroke-width="0.25" />
                                    </svg>
                                </div>

                            </div>

                        </div> */}

                        <div className={styles.city_inputs_container}>
                            <input type="text" placeholder='Provience' className={`${styles.input} ${styles.city_input} ${styles.input_style}`} />
                            <input type="text" placeholder='Postal Code' className={`${styles.input} ${styles.city_input} ${styles.input_style}`} />
                            <input type="text" placeholder='City' className={`${styles.input} ${styles.city_input} ${styles.input_style}`} />
                        </div>

                        <div className={styles.inputDropDown_shipping}>
                            <div className={styles.dropdown_Coutry}>

                                <input className={`${styles.input_style} ${styles.input}`} type="text" onChange={checkFullInput} placeholder="Country" />
                                <div className={styles.icon_dropdown}> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                        <path d="M0.939969 2.81554C0.980609 2.7748 1.02889 2.74248 1.08204 2.72042C1.13519 2.69836 1.19217 2.68701 1.24972 2.68701C1.30727 2.68701 1.36425 2.69836 1.4174 2.72042C1.47052 2.74246 1.51878 2.77477 1.5594 2.81548L1.55937 2.81544L1.47098 2.90381L1.55947 2.81554L0.939969 2.81554ZM0.939969 2.81554L1.02847 2.90382L0.939969 2.81554ZM5.11949 7.16427L5.1674 7.27972C5.11425 7.30177 5.05727 7.31313 4.99972 7.31313C4.94217 7.31313 4.88519 7.30177 4.83204 7.27972C4.77894 7.25768 4.7307 7.2254 4.69008 7.18471C4.69004 7.18467 4.69001 7.18463 4.68997 7.1846L0.940193 3.43482C0.940168 3.4348 0.940143 3.43477 0.940119 3.43475L5.11949 7.16427ZM5.11949 7.16427L5.1674 7.27972C5.2205 7.25768 5.26874 7.2254 5.30936 7.18471L5.11949 7.16427ZM8.44007 2.81544L4.99972 6.2564L5.30947 7.1846L9.05936 3.43471C9.10002 3.39405 9.13228 3.34577 9.15428 3.29264C9.17629 3.23952 9.18761 3.18257 9.18761 3.12507C9.18761 3.06757 9.17629 3.01062 9.15428 2.9575C9.13228 2.90437 9.10002 2.85609 9.05936 2.81543C9.0187 2.77477 8.97042 2.74251 8.9173 2.72051C8.86417 2.6985 8.80723 2.68718 8.74972 2.68718C8.69221 2.68718 8.63527 2.6985 8.58215 2.72051L8.62998 2.83599L8.58214 2.72051C8.52902 2.74251 8.48074 2.77477 8.44008 2.81543L8.44007 2.81544Z" fill="#1D252C" stroke="#1D252C" stroke-width="0.25" />
                                    </svg>
                                </div>

                            </div>
                        </div>

                        <div className={styles.secCheck_shipping}>
                            <div className={styles.text_Check_auth}>
                                Save this informations for a future fast checkout
                            </div>

                            <div className={styles.check_box}>
                                <label className={styles.container}>
                                    <input type="checkbox" onChange={checkFullInput} className={styles.input} />
                                    <div className={styles.checkmark}></div>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className={styles.backButton_Auth}>

                        <div className={styles.back_to_card}>
                            <a href="#" onClick={goBack}>Back to cart</a>
                        </div>

                        <div className={styles.button_shipping}>
                            <button className={styles.button} onClick={goToShipping}>
                                Go to shipping
                            </button>
                        </div>

                    </div>


                </div>

            </div>




        </div>

    )
}

export default Authentication