import React from 'react';
import styles from "./Work.module.css";

type PropsType = {
    title: string
    description: string
}

const Work = ({title, description}: PropsType) => {
    return (
        <div className={styles.work}>
            <div className={styles.icon}>s</div>
            <h3>{title}</h3>
            <span className={styles.description}>
                {description}
            </span>
        </div>
    );
};

export default Work;