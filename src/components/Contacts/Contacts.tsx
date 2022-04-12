import React from 'react';
import styles from './Contacts.module.css'
import stylesContainer from "../../common/styles/Container.module.css";

const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${stylesContainer.container} ${styles.contactsContainer}`}>
                <h2 className={styles.title}>Мои контакты</h2>
                <div className={styles.contacts}>
                    <form>
                        <div><input type="text"/></div>
                        <div><input type="text"/></div>
                        <div><textarea/></div>
                    </form>
                </div>
                <div><button>Отправить</button></div>
            </div>
        </div>
    );
};

export default Contacts;