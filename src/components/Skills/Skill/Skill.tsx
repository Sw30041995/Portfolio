import React from 'react';
import styles from "./Skill.module.css";

type PropsType = {
    title: string
    description: string
}
const Skill = ({title, description}: PropsType) => {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}>s</div>
            <h3>{title}</h3>
            <span className={styles.description}>
                {description}
            </span>
        </div>
    );
};

export default Skill;