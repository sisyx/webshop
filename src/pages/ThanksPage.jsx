import React, { useContext } from 'react';
import styles from './ThanksPage.module.css';
import { useNavigate } from 'react-router-dom';
import { StateContext } from '../Contexts/Conetxts';
import Img from '../components/Img';
import Steps from '../components/Steps';

function ThanksPage() {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(StateContext);

  const { cart } = state;
  const selectedProduct = cart.at(0);

  const totalPrice = cart.reduce((sum, cur)=> sum+(cur.price * cur.count),0).toFixed(2)
 
  return (
    <div className={styles.parenThanks}>
      <div className={styles.right_mobile}>
        <div className={styles.right_mobile_icon_container}>
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.4375C0 1.22201 0.0856024 1.01535 0.237976 0.862976C0.390349 0.710602 0.597012 0.625 0.8125 0.625H3.25C3.43124 0.62505 3.60726 0.685695 3.75006 0.79729C3.89287 0.908886 3.99427 1.06502 4.03813 1.24087L4.69625 3.875H23.5625C23.6827 3.87507 23.8013 3.9018 23.9099 3.95325C24.0185 4.0047 24.1143 4.07959 24.1905 4.17254C24.2666 4.26548 24.3212 4.37416 24.3503 4.49075C24.3794 4.60733 24.3823 4.72892 24.3587 4.84675L22.7337 12.9717C22.6982 13.1489 22.6046 13.3092 22.4677 13.4272C22.3309 13.5452 22.1586 13.6143 21.9781 13.6234L6.708 14.3904L7.17438 16.875H21.125C21.3405 16.875 21.5472 16.9606 21.6995 17.113C21.8519 17.2653 21.9375 17.472 21.9375 17.6875C21.9375 17.903 21.8519 18.1097 21.6995 18.262C21.5472 18.4144 21.3405 18.5 21.125 18.5H6.5C6.31058 18.4998 6.12717 18.4335 5.98148 18.3124C5.83579 18.1913 5.73698 18.0232 5.70213 17.837L3.26625 4.86138L2.61625 2.25H0.8125C0.597012 2.25 0.390349 2.1644 0.237976 2.01202C0.0856024 1.85965 0 1.65299 0 1.4375ZM5.04075 5.5L6.40575 12.7784L21.2648 12.0325L22.5713 5.5H5.04075ZM8.125 18.5C7.26305 18.5 6.4364 18.8424 5.8269 19.4519C5.21741 20.0614 4.875 20.888 4.875 21.75C4.875 22.612 5.21741 23.4386 5.8269 24.0481C6.4364 24.6576 7.26305 25 8.125 25C8.98695 25 9.8136 24.6576 10.4231 24.0481C11.0326 23.4386 11.375 22.612 11.375 21.75C11.375 20.888 11.0326 20.0614 10.4231 19.4519C9.8136 18.8424 8.98695 18.5 8.125 18.5ZM19.5 18.5C18.638 18.5 17.8114 18.8424 17.2019 19.4519C16.5924 20.0614 16.25 20.888 16.25 21.75C16.25 22.612 16.5924 23.4386 17.2019 24.0481C17.8114 24.6576 18.638 25 19.5 25C20.362 25 21.1886 24.6576 21.7981 24.0481C22.4076 23.4386 22.75 22.612 22.75 21.75C22.75 20.888 22.4076 20.0614 21.7981 19.4519C21.1886 18.8424 20.362 18.5 19.5 18.5ZM8.125 20.125C7.69402 20.125 7.2807 20.2962 6.97595 20.601C6.67121 20.9057 6.5 21.319 6.5 21.75C6.5 22.181 6.67121 22.5943 6.97595 22.899C7.2807 23.2038 7.69402 23.375 8.125 23.375C8.55598 23.375 8.9693 23.2038 9.27405 22.899C9.57879 22.5943 9.75 22.181 9.75 21.75C9.75 21.319 9.57879 20.9057 9.27405 20.601C8.9693 20.2962 8.55598 20.125 8.125 20.125ZM19.5 20.125C19.069 20.125 18.6557 20.2962 18.351 20.601C18.0462 20.9057 17.875 21.319 17.875 21.75C17.875 22.181 18.0462 22.5943 18.351 22.899C18.6557 23.2038 19.069 23.375 19.5 23.375C19.931 23.375 20.3443 23.2038 20.649 22.899C20.9538 22.5943 21.125 22.181 21.125 21.75C21.125 21.319 20.9538 20.9057 20.649 20.601C20.3443 20.2962 19.931 20.125 19.5 20.125Z" fill="#56B280"/>
          </svg>
        <div className={styles.right_mobile_text}>
          ORDER PAID
        </div>
        </div>
        <div className={styles.mb_price}>${totalPrice}</div>
      </div>
      <div className={styles.rightThanks}>

        <div className={styles.parent_right_paymentpage}>

          <div className={styles.up_parent_paymentpage}>

            <div className={styles.right_up_parent_paymentpage}>

              <div className={styles.productName_paymentpage}>
                Spiced Mint Candleaf®
              </div>

              <div className={styles.price_paymentpage}>
                $ {(selectedProduct.price * selectedProduct.count).toFixed(2)}
              </div>

            </div>

            <div className={styles.left_up_parent_paymentpage}>
              <div className={styles.image_paymentpage}>
                <Img src="/images/product-image.svg" />
              </div>

              <div className={styles.couner_paymentpage}>
                <div className={styles.number_counter}>
                  {selectedProduct.count}
                </div>
              </div>
            </div>


          </div>

          <div className={styles.down_parent_paymentpage}>

            <div className={styles.all_down_parent_paymentpage}>

              <div className={styles.label_paymentpage}>
                Subtotal
              </div>

              <div className={styles.price_paymentpage}>
                $  {totalPrice}
              </div>
            </div>

            <div className={styles.all_down_parent_paymentpage}>

              <div className={styles.label_paymentpage}>
                Shipping
              </div>

              <div className={styles.shiping_paymentpage}>
                Free Shipping
              </div>

            </div>

            <div className={styles.line_paymentpage}></div>


            <div className={styles.all_down_parent_paymentpage}>

              <div className={styles.label_paymentpage}>
                Total
              </div>

              <div className={styles.price_paymentpage2}>
                $  {totalPrice}
              </div>

            </div>

          </div>

        </div>

      </div>

      <div className={styles.leftThanks}>

        <div className={styles.parent_LeftThanks}>

          <Steps step={4} cls={styles.steps} />

          <div className={styles.content_thanks}>

            <div className={styles.icon_thanks}>

              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="CheckCircle" clip-path="url(#clip0_116_579)">
                  <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M50 93.75C61.6032 93.75 72.7312 89.1406 80.9359 80.9359C89.1406 72.7312 93.75 61.6032 93.75 50C93.75 38.3968 89.1406 27.2688 80.9359 19.0641C72.7312 10.8594 61.6032 6.25 50 6.25C38.3968 6.25 27.2688 10.8594 19.0641 19.0641C10.8594 27.2688 6.25 38.3968 6.25 50C6.25 61.6032 10.8594 72.7312 19.0641 80.9359C27.2688 89.1406 38.3968 93.75 50 93.75ZM50 100C63.2608 100 75.9785 94.7322 85.3553 85.3553C94.7322 75.9785 100 63.2608 100 50C100 36.7392 94.7322 24.0215 85.3553 14.6447C75.9785 5.26784 63.2608 0 50 0C36.7392 0 24.0215 5.26784 14.6447 14.6447C5.26784 24.0215 0 36.7392 0 50C0 63.2608 5.26784 75.9785 14.6447 85.3553C24.0215 94.7322 36.7392 100 50 100Z" fill="#56B280" fill-opacity="0.6" />
                  <path id="Vector_2" fill-rule="evenodd" clip-rule="evenodd" d="M68.5626 31.0625C69.4373 30.1955 70.6181 29.7075 71.8497 29.7041C73.0813 29.7007 74.2648 30.1822 75.1442 31.0444C76.0237 31.9066 76.5285 33.0803 76.5494 34.3117C76.5704 35.5431 76.1059 36.7334 75.2564 37.625L50.3064 68.8125C49.8776 69.2744 49.36 69.6451 48.7847 69.9023C48.2094 70.1596 47.5881 70.2982 46.958 70.3099C46.3278 70.3216 45.7018 70.2061 45.1174 69.9703C44.5329 69.7345 44.002 69.3832 43.5564 68.9375L27.0251 52.4C26.5646 51.9709 26.1952 51.4534 25.939 50.8784C25.6828 50.3034 25.545 49.6827 25.5339 49.0533C25.5228 48.4239 25.6386 47.7987 25.8744 47.2151C26.1101 46.6314 26.461 46.1012 26.9061 45.6561C27.3513 45.2109 27.8815 44.86 28.4651 44.6243C29.0488 44.3885 29.674 44.2727 30.3034 44.2838C30.9328 44.295 31.5535 44.4327 32.1285 44.6889C32.7035 44.9451 33.221 45.3145 33.6501 45.775L46.7376 58.8563L68.4439 31.2C68.4826 31.1516 68.5244 31.1057 68.5689 31.0625H68.5626Z" fill="#56B280" fill-opacity="0.6" />
                </g>
                <defs>
                  <clipPath id="clip0_116_579">
                    <rect width="100" height="100" fill="white" />
                  </clipPath>
                </defs>
              </svg>


            </div>

            <div className={styles.text_confirm}>
            Payment Confirmed
            </div>

            <div className={styles.title_thanks}>
            ORDER #2039
            </div>

            <div className={styles.text_thanks}>
               Thank you Joe for buying Candleaf. The nature is grateful to you. Now that your order is confirmed it will be ready to ship in 2 days. Please check your inbox in the future for your order updates.
            </div>

            <div className={styles.buttonThanks}>
            <button onClick={e =>{
                dispatch({type: 'pay'})
                navigate('/')
            } 
            } className={styles.button}>Back to Shopping

            </button>

            </div>

            <div className={styles.printKey_thanks}>
              <a href="#">
              Print receipt
              </a>
            </div>

          </div>

        </div>



      </div>

    </div>
  )
}

export default ThanksPage