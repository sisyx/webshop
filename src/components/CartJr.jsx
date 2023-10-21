import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { StateContext } from '../Contexts/Conetxts';
import Img from './Img';
import styles from './CartJr.module.css'
function CartJr({cls='', mbcls=''}) {

    const { state, goBack } = useContext(StateContext);
    const { cart } = state
    const navigate = useNavigate();
    const selectedProduct = cart.at(0)

    const totalPrice = cart.reduce((sum, cur) => sum+(cur.price * cur.count), 0).toFixed(2)


    return (
        <>
        <div className={`${styles.cart_mobile} ${mbcls}`}>
            <div className={styles.icon_container_mb}>
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.4375C0 2.22201 0.0856024 2.01535 0.237976 1.86298C0.390349 1.7106 0.597012 1.625 0.8125 1.625H3.25C3.43124 1.62505 3.60726 1.68569 3.75006 1.79729C3.89287 1.90889 3.99427 2.06502 4.03813 2.24087L4.69625 4.875H23.5625C23.6827 4.87507 23.8013 4.9018 23.9099 4.95325C24.0185 5.0047 24.1143 5.07959 24.1905 5.17254C24.2666 5.26548 24.3212 5.37416 24.3503 5.49075C24.3794 5.60733 24.3823 5.72892 24.3587 5.84675L22.7337 13.9717C22.6982 14.1489 22.6046 14.3092 22.4677 14.4272C22.3309 14.5452 22.1586 14.6143 21.9781 14.6234L6.708 15.3904L7.17438 17.875H21.125C21.3405 17.875 21.5472 17.9606 21.6995 18.113C21.8519 18.2653 21.9375 18.472 21.9375 18.6875C21.9375 18.903 21.8519 19.1097 21.6995 19.262C21.5472 19.4144 21.3405 19.5 21.125 19.5H6.5C6.31058 19.4998 6.12717 19.4335 5.98148 19.3124C5.83579 19.1913 5.73698 19.0232 5.70213 18.837L3.26625 5.86138L2.61625 3.25H0.8125C0.597012 3.25 0.390349 3.1644 0.237976 3.01202C0.0856024 2.85965 0 2.65299 0 2.4375ZM5.04075 6.5L6.40575 13.7784L21.2648 13.0325L22.5713 6.5H5.04075ZM8.125 19.5C7.26305 19.5 6.4364 19.8424 5.8269 20.4519C5.21741 21.0614 4.875 21.888 4.875 22.75C4.875 23.612 5.21741 24.4386 5.8269 25.0481C6.4364 25.6576 7.26305 26 8.125 26C8.98695 26 9.8136 25.6576 10.4231 25.0481C11.0326 24.4386 11.375 23.612 11.375 22.75C11.375 21.888 11.0326 21.0614 10.4231 20.4519C9.8136 19.8424 8.98695 19.5 8.125 19.5ZM19.5 19.5C18.638 19.5 17.8114 19.8424 17.2019 20.4519C16.5924 21.0614 16.25 21.888 16.25 22.75C16.25 23.612 16.5924 24.4386 17.2019 25.0481C17.8114 25.6576 18.638 26 19.5 26C20.362 26 21.1886 25.6576 21.7981 25.0481C22.4076 24.4386 22.75 23.612 22.75 22.75C22.75 21.888 22.4076 21.0614 21.7981 20.4519C21.1886 19.8424 20.362 19.5 19.5 19.5ZM8.125 21.125C7.69402 21.125 7.2807 21.2962 6.97595 21.601C6.67121 21.9057 6.5 22.319 6.5 22.75C6.5 23.181 6.67121 23.5943 6.97595 23.899C7.2807 24.2038 7.69402 24.375 8.125 24.375C8.55598 24.375 8.9693 24.2038 9.27405 23.899C9.57879 23.5943 9.75 23.181 9.75 22.75C9.75 22.319 9.57879 21.9057 9.27405 21.601C8.9693 21.2962 8.55598 21.125 8.125 21.125ZM19.5 21.125C19.069 21.125 18.6557 21.2962 18.351 21.601C18.0462 21.9057 17.875 22.319 17.875 22.75C17.875 23.181 18.0462 23.5943 18.351 23.899C18.6557 24.2038 19.069 24.375 19.5 24.375C19.931 24.375 20.3443 24.2038 20.649 23.899C20.9538 23.5943 21.125 23.181 21.125 22.75C21.125 22.319 20.9538 21.9057 20.649 21.601C20.3443 21.2962 19.931 21.125 19.5 21.125Z" fill="#272727"/>
                </svg>
                <div className={styles.number_counter}>
                    {selectedProduct.count}
                </div>
            </div>
            <div className={styles.cart_info_mobile}>
                <div className={styles.total_price_mobile}>
                    <span>Total Price: </span>${totalPrice}
                </div>
                <div className={styles.total_count_mb}>
                    <span>Total Items:</span>{cart.reduce((acc, cur) => acc + cur.count,0)}
                </div>
            </div>
        </div>
        <div className={`${styles.right_Authentication} ${cls}`}>

                <div className={styles.parent_right_Authentication}>
                { selectedProduct ? 
                        <div className={styles.up_parent_Authentication}>

                        <div className={styles.right_up_parent_Authentication}>

                            <div className={styles.productName_Authentication}>
                                {selectedProduct.productName} Candleaf®
                            </div>

                            <div className={styles.price_Authentication}>
                                $ {(selectedProduct.price * selectedProduct.count).toFixed(2)}
                            </div>

                        </div>

                        <div className={styles.left_up_parent_Authentication}>
                            <div className={styles.image_Authentication}>
                                <Img src="/images/product-image.svg" />
                            </div>

                            <div className={styles.couner_Authentication}>
                                <div className={styles.number_counter}>
                                    {selectedProduct.count}
                                </div>
                            </div>
                        </div>

                    </div>
                    : null
                }

            <div className={styles.line_Authentication}></div>

            <div className={styles.copun_parent_Authentication}><div>
            
            </div><button className={`${styles.button_copun} ${styles.button}`}>Add Code
                        </button>

                        <div className={styles.input_copun}>
                            <input placeholder="Coupon Code" className={`${styles.input_style} ${styles.input}`} type="text"/>
                        </div>

                    </div>

                    <div className={styles.line_Authentication}></div>

                    <div className={styles.down_parent_Authentication}>

                        <div className={styles.all_down_parent_Authentication}>

                            <div className={styles.label_Authentication}>
                                Subtotal
                            </div>

                            <div className={styles.price_Authentication}>
                                $  {totalPrice}
                            </div>
                        </div>

                        <div className={styles.all_down_parent_Authentication}>

                            <div className={styles.label_Authentication}>
                                Shipping
                            </div>

                            <div className={styles.shiping_Authentication}>
                                Calculated at the next step
                            </div>

                        </div>

                        <div className={styles.line_Authentication}></div>


                        <div className={styles.all_down_parent_Authentication}>

                            <div className={styles.label_Authentication}>
                                Total
                            </div>

                            <div className={styles.price_Authentication2}>
                                $  {totalPrice}
                            </div>

                        </div>

                    </div>

                </div>


            </div>
    </>
    )
}

export default CartJr
