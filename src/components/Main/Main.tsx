import React from 'react';
import styles from './Main.module.css'
import stylesContainer from './../../common/styles/Container.module.css'

const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={`${stylesContainer.container} ${styles.container}`}>
                <div className={styles.text}>
                    <h5>Hello, my name is</h5>
                    <h1>IVAN ILYASOV</h1>
                    <button>MY WORK</button>
                </div>
                <div className={styles.photo}>

                </div>
            </div>
        </div>
    )
}

export default Main