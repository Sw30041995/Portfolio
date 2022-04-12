import React from 'react';
import styles from './Works.module.css'
import stylesContainer from './../../common/styles/Container.module.css'
import Work from "./Work/Work";

const works = [
    {id: 1, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, voluptates?', title: 'social network'},
    {id: 2, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. dsdsds, voluptates?', title: 'todo-list'},
    {id: 3, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolosdrem, voluptates?', title: 'counter'}
]

const Works = () => {
    return (
        <div className={styles.worksBlock}>
            <div className={`${stylesContainer.container} ${styles.worksContainer}`}>
                <h2>Мои работы</h2>
                <div className={styles.works}>
                    {works.map(w => <Work key={w.id} description={w.description} title={w.title}/>)}
                </div>
            </div>
        </div>
    )
}

export default Works;