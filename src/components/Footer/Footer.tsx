import React from 'react';
import styles from './Footer.module.css'
import stylesContainer from "../../common/styles/Container.module.css";

const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <div className={`${stylesContainer.container} ${styles.footerContainer}`}>
                <h2>Иван Ильясов</h2>
                <div className={styles.footer}>
                    <div>WhatsApp</div>
                    <div>Telegram</div>
                    <div>Vk</div>
                    <div>Phone</div>
                </div>
                <span>2022 Все права защищены</span>
            </div>
        </div>
    );
};

export default Footer;