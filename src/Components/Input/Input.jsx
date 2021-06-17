import React from 'react';
import styles from './Input.module.css';



function Input({ message, setMessage, sendMessage }) {
    return (
        <>
            <form className={styles.form}>
                <input
                    className={styles.input}
                    placeholder="Type here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
                />
                <button className={styles.sendButton} onClick={(e) => sendMessage(e)}>Send</button>
            </form>
        </>
    )
}
export { Input }