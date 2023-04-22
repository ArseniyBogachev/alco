import React, {useState} from 'react';
import axios from "axios";
import styles from '../assets/styles/partsHomeStyle/bodyStyle.module.scss'

const BodyHome = () => {
    const [loadMessage, setLoad] = useState('')
    const [sendMessage, setSend] = useState('')

    function load_message() {
        const response = new Promise((resolve, reject) => {
            const message = axios.get(`http://127.0.0.1:8000/api/get/`)
            resolve(message)
        })
        response.then((value) => {
            setLoad(value.data.message)
            console.log(value.data.method)
        })
    }

    function send_message() {
        const response = new Promise((resolve, reject) => {
            const message = axios.post(`http://127.0.0.1:8000/api/post/`, {message: sendMessage})
            resolve(message)
        })
        response.then((value) => {
            console.log(`Message: ${value.data.data.message}`)
            console.log(`Method: ${value.data.method}`)
        })
    }

    return (
        <div className={styles.main}>
            <div className={styles.load}>
                <h1>Message: {loadMessage}</h1>
                <button type='button' onClick={load_message}>Load</button>
            </div>

            <div className={styles.send}>
                <input type="text" value={sendMessage} onChange={event => setSend(event.target.value)}/>
                <button type='button' onClick={send_message}>Send</button>
            </div>
        </div>
    );
};

export default BodyHome;