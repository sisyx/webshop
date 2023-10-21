import styles from './Counter.module.css'
function Counter({count, addFuck, decFunc, cls}) {
    return (
        <span className={`${styles.right_price_count_settings} ${cls}`}>
            <button className={styles.right_price_count_btn} onClick={addFuck}>+</button>
            <span className={styles.right_price_count_count}>{count}</span>
            <button className={styles.right_price_count_btn} onClick={decFunc} style={{pointerEvents: `${ count > 1 ? 'all' : 'none'}`}}>-</button>
        </span>
    )
}

export default Counter
