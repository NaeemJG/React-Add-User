import React from 'react'
import styles from './Form.module.css'
import Button from '../UI/Button'

const Form = props => {
    return (
        <div className={styles.form}>
            <label>User Name</label>
            <input type='text'></input>
            <label>Age (Years)</label>
            <input type='text'></input>
            <Button></Button>
        </div>
    )
}

export default Form