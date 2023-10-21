import React from 'react';
import styles from './Home3.module.css';
import Img from './Img'
function Home3() {
    return (
        <div className={styles.parentHome3}>


            <div className={styles.leftHome3}>
                <Img src='/images/mockups.svg' />
            </div>

            <div className={styles.rightHome3}>

                <div className={styles.upLeftHome3}>
                    <div className={styles.titleLeftHome3}>
                        <h2>Clean and fragrant soy wax</h2>
                    </div>

                    <div className={styles.textLeftHome3}>
                        Made for your home and for your wellness
                    </div>

                </div>

                <div className={styles.downLeftHome3}>
                    <div className={styles.featureLeftHome3}>
                        <ul>
                            <li>Eco-sustainable:All recyclable materials, 0% CO2 emissions</li>
                            <li>Hyphoallergenic: 100% natural, human friendly ingredients </li>
                            <li>Hyphoallergenic: 100% natural, human friendly ingredients </li>
                            <li>Hyphoallergenic: 100% natural, human friendly ingredients </li>
                            <li>Hyphoallergenic: 100% natural, human friendly ingredients </li>
                            <li>Hyphoallergenic: 100% natural, human friendly ingredients </li>
                        </ul>
                    </div>

                <button className={styles.button}>
                    Learn More
                    <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor">
                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clip-rule="evenodd"></path>
                    </svg>
                </button>

                </div>


            </div>

        </div>
    )
}

export default Home3