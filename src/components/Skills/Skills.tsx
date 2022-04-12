import React from 'react';
import styles from './Skills.module.css'
import stylesContainer from './../../common/styles/Container.module.css'
import Skill from "./Skill/Skill";

const skills = [
    {id: 1, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, voluptates?', title: 'JS'},
    {id: 2, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. dsdsds, voluptates?', title: 'HTML'},
    {id: 3, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolosdrem, voluptates?', title: 'REACT'},
    {id: 4, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. nmnbmmbn, voluptates?', title: 'REDUX'},
    {id: 5, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. popooppo, voluptates?', title: 'CSS'},
    {id: 6, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ivan, voluptates?', title: 'MOBX'}
]

const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>MY SKILLS</h2>
                <div className={styles.skills}>
                    {skills.map(s => <Skill key={s.id} title={s.title} description={s.description}/>)}
                </div>
            </div>
        </div>
    )
}

export default Skills;