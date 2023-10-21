import { useContext, useEffect, useState } from 'react'
import styles from './Product.module.css'
import { StateContext } from '../Contexts/Conetxts';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import Img from '../components/Img';
import Counter from '../components/Counter';


function Product() {

    const context = useContext(StateContext);

    const navigate = useNavigate()
    const {state, dispatch} = context

    const [searchParams, setSearchParams] =useSearchParams()

    const id = searchParams.get('id')
    const [count, setCount] = useState(1)

    const {cart} = state

    const product = state.products.find(product => product.id === id)

    useEffect(function () {
        console.log(product);
    }, [])

    const price = (product.price * count).toFixed(2);

    function handleIncCountClick(event) {
        setCount(cur => cur+1)
    }

    function handleDecCountClick(event) {
        setCount(cur => cur-1)
    }

    function handleAddToCart(event) {
        const obj =  {
            id,
            productName: product.name,
            count,
            price: product.price,
        }

        // check if the same product exists in the cart
        // if (!!cart.find(product => product.id === id)) {
        //     alert('the same product exist')
        //     return
        // }
        console.log(cart);

        if (!!cart?.find(product => product.id === id)) {
            alert('The same product exist in the cart');
            return
        }
        // check if exactly one checkbox is checked
        if (!document.querySelectorAll('.requency_option')[0].checked && !document.querySelectorAll('.requency_option')[1].checked ) {
            alert('please select the frequensy mode.')
            return
        }
        console.log(`
        1: ${document.querySelectorAll('.requency_option')[0].checked}
        2: ${document.querySelectorAll('.requency_option')[1].checked}
        `);
        dispatch({
            type: 'addToCart',
            payload: obj
        })


        navigate('/cart')
    }

    return (
        <main className={styles.product_main}>
            <div className={styles.left}>
                <div className={`${styles.right_title} ${styles.mobile}`}>
                    {product.name} Candleaf<sup>®</sup>
                </div>
                <Img src="/images/b584cab7879f945efaa1208441b07917.png" cls={styles.left_image} />
                <p className={styles.left_text}>
                    <span className={styles.left_text_major}>All hand-made with natural oy wax, Candleaf is made for your pleasure moments. </span>
                    <span className={styles.left_text_minor}><span>🚚</span>FREE SHIPPINGS</span>
                </p>
            </div>
            <div className={styles.right}>
                <div className={`${styles.right_title} ${styles.desktop}`}>
                    {/* Special Mint Candleaf® */}
                    {product.name} Candleaf<sup>®</sup>
                </div>
                <div className={styles.right_price}>
                    <div className={styles.right_price_price}><span>$</span>{price}</div>
                    <div className={styles.right_price_count}>
                        <span className={styles.right_price_count_text}>Quantity</span>
                        <Counter addFuck={handleIncCountClick} decFunc={handleDecCountClick} count={count} />
                    </div>
                </div>
                <div className={styles.right_buy}>
                    <form className={styles.right_buy_form}>
                        <div className={styles.right_buy_form_oprion1_div}>
                            <input type="radio" name="option1" id="" className={`${styles.input} requency_option`} />
                            <p className={styles.right_buy_form_oprion1_text}>One time purchase</p>
                        </div>
                        <div className={styles.right_buy_form_oprion2_div}>
                            <div className={styles.right_buy_form_oprion2_div_top}>
                                <input type="radio" name="option1" id="" className={`${styles.input} requency_option`} />
                                <span className={styles.right_buy_form_oprion2_text}>
                                    Subscribe and delivery every
                                    <select name="delivery-sequence" className={styles.right_buy_form_oprion2_select}>
                                        <option value="4 weakes">4 Weaks</option>
                                        <option value="4 weakes">Day</option>
                                        <option value="4 weakes">Weak</option>
                                        <option value="4 weakes">2 Weaks</option>
                                        <option value="4 weakes">Month</option>
                                    </select>
                                </span>
                            </div>
                            <div className={styles.right_buy_form_oprion1_div_bottom}>
                            Subscribe now and get the 10% of discount on every recurring order.  The discount will be applied at checkout. <a href="#">See details</a>
                            </div>
                        </div>
                    </form>
                    <button className={styles.add_btn} onClick={handleAddToCart}>
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_734_372)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.761475 2.25C0.761475 2.05109 0.840946 1.86032 0.982407 1.71967C1.12387 1.57902 1.31573 1.5 1.51578 1.5H3.77871C3.94697 1.50005 4.11039 1.55603 4.24296 1.65904C4.37554 1.76205 4.46968 1.90618 4.5104 2.0685L5.12139 4.5H22.6365C22.748 4.50007 22.8582 4.52474 22.959 4.57223C23.0598 4.61972 23.1488 4.68885 23.2195 4.77465C23.2902 4.86044 23.3409 4.96076 23.3679 5.06838C23.3949 5.176 23.3976 5.28823 23.3757 5.397L21.8671 12.897C21.8341 13.0605 21.7472 13.2085 21.6201 13.3174C21.4931 13.4264 21.3331 13.4901 21.1656 13.4985L6.98906 14.2065L7.42203 16.5H20.3735C20.5736 16.5 20.7655 16.579 20.9069 16.7197C21.0484 16.8603 21.1278 17.0511 21.1278 17.25C21.1278 17.4489 21.0484 17.6397 20.9069 17.7803C20.7655 17.921 20.5736 18 20.3735 18H6.79596C6.6201 17.9998 6.44983 17.9386 6.31457 17.8268C6.17932 17.7151 6.08758 17.5599 6.05522 17.388L3.7938 5.4105L3.19035 3H1.51578C1.31573 3 1.12387 2.92098 0.982407 2.78033C0.840946 2.63968 0.761475 2.44891 0.761475 2.25ZM5.44121 6L6.70846 12.7185L20.5033 12.03L21.7162 6H5.44121ZM8.30458 18C7.50435 18 6.73691 18.3161 6.17106 18.8787C5.60522 19.4413 5.28733 20.2044 5.28733 21C5.28733 21.7956 5.60522 22.5587 6.17106 23.1213C6.73691 23.6839 7.50435 24 8.30458 24C9.1048 24 9.87224 23.6839 10.4381 23.1213C11.0039 22.5587 11.3218 21.7956 11.3218 21C11.3218 20.2044 11.0039 19.4413 10.4381 18.8787C9.87224 18.3161 9.1048 18 8.30458 18ZM18.8649 18C18.0647 18 17.2972 18.3161 16.7314 18.8787C16.1656 19.4413 15.8477 20.2044 15.8477 21C15.8477 21.7956 16.1656 22.5587 16.7314 23.1213C17.2972 23.6839 18.0647 24 18.8649 24C19.6651 24 20.4326 23.6839 20.9984 23.1213C21.5643 22.5587 21.8822 21.7956 21.8822 21C21.8822 20.2044 21.5643 19.4413 20.9984 18.8787C20.4326 18.3161 19.6651 18 18.8649 18ZM8.30458 19.5C7.90446 19.5 7.52074 19.658 7.23782 19.9393C6.9549 20.2206 6.79596 20.6022 6.79596 21C6.79596 21.3978 6.9549 21.7794 7.23782 22.0607C7.52074 22.342 7.90446 22.5 8.30458 22.5C8.70469 22.5 9.08841 22.342 9.37133 22.0607C9.65425 21.7794 9.8132 21.3978 9.8132 21C9.8132 20.6022 9.65425 20.2206 9.37133 19.9393C9.08841 19.658 8.70469 19.5 8.30458 19.5ZM18.8649 19.5C18.4648 19.5 18.0811 19.658 17.7982 19.9393C17.5152 20.2206 17.3563 20.6022 17.3563 21C17.3563 21.3978 17.5152 21.7794 17.7982 22.0607C18.0811 22.342 18.4648 22.5 18.8649 22.5C19.265 22.5 19.6488 22.342 19.9317 22.0607C20.2146 21.7794 20.3735 21.3978 20.3735 21C20.3735 20.6022 20.2146 20.2206 19.9317 19.9393C19.6488 19.658 19.265 19.5 18.8649 19.5Z" fill="currentcolor"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_734_372">
                                    <rect width="24.1379" height="24" fill="currentcolor" transform="translate(0.761475)"/>
                                </clipPath>
                            </defs>
                        </svg> + Add to cart
                    </button>
                </div>
                <div className={styles.right_info}>
                    <div><b>Wax :</b>{product.wax}</div>
                    <div><b>Fragrance: </b>{product.fragnance}</div>
                    <div><b>Burning Time: </b>{product.burningTime}</div><div><b> Dimension: </b>{product.dimensions}</div><div><b>Weight:</b> {product.weight}</div> 
                </div>
            </div>
        </main>
    )

    return <></>
}

export default Product


// wax : Top grade Soy wax that delivers a smoke less,  consistent burn
// Fragrance: Premium quality ingredients with natural essential oils
// burinin time: 70-75 hours 
// dimensions : 10cm x 5cm
// weight: 400g