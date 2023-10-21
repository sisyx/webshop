import { useContext, useState } from 'react'
import styles from './CartProduct.module.css'
import { StateContext } from '../Contexts/Conetxts'
import Counter from '../components/Counter'
function CartProduct({id}) {
    const { state, dispatch } = useContext(StateContext);
    const { cart } = state
    const product = cart.find(product => product.id === id)
    const [count, setCount] = useState(product.count)
    const price = product.price
    
    function handleAccCount(event) {
        dispatch({type: 'toggleProductCount', payload: {id, count: 1}})
        setCount(cur => cur + 1)
    }

    function handleDecCount(event) {
        if (count <= 1) return 
        dispatch({type: 'toggleProductCount', payload: {id, count: -1}})
        setCount(cur => cur - 1)
    }

    function handleRemoveProduct(event) {
        dispatch({type: 'removeProduct', payload: {id}})
    }

    return (
        <div className={styles.product_tab}>

                    <div className={styles.total_product}>
                        {(price * count).toFixed(2)}$
                    </div>

                    <div className={styles.quantity_product}>
                        <Counter addFuck={handleAccCount} decFunc={handleDecCount} count={count} cls={styles.counter} />
                    </div>

                    <div className={styles.unitPrice_product}>
                        {price.toFixed(2)}$
                    </div>

                    <div className={styles.productSection_product}>

                        <div className={styles.right_productSec}>

                            <div className={styles.productName_product}>
                                {product.productName} Candleaf®
                            </div>

                            <div className={styles.removeItem} onClick={handleRemoveProduct}>
                                Remove
                            </div>
                        </div>

                        <div className={styles.left_productSec}>

                            <img className={styles.image_product} src="/images/image.svg" alt="" />

                        </div>

                    </div>
            </div>
    )
}
CartProduct
export default CartProduct
