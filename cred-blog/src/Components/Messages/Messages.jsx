import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import styles from './Messages.module.css';
import { Message } from '../Message/Message'


function Messages({ messages, name }) {
    return (
        <>
            <ScrollToBottom className={styles.messages}>
                {
                    messages.map((message, i) => <div key={i}><Message message={message} name={name} /></div>)
                }
            </ScrollToBottom>
        </>
    )
}
export { Messages }