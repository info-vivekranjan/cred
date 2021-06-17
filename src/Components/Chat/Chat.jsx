import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';


import { InfoBar } from '../InfoBar/InfoBar';
import { Input } from '../Input/Input';
import { Messages } from '../Messages/Messages';

import styles from './Chat.module.css';
import { PeopleInOneRoom } from '../PeopleInOneRoom/PeopleInOneRoom';


let socket;

function Chat({ loaction }) {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('')
    const [users, setUsers] = useState('');

    const ENDPOINT = 'localhost:5000'



    useEffect(() => {
        const { name, room } = queryString.parse(window.location.search)

        setName(name);
        setRoom(room);

        socket = io(ENDPOINT);
        // console.log(socket);

        socket.emit('join', { name, room }, () => {


        });

        return () => {
            socket.emit('disconnect');
            socket.off();
        }


    }, [ENDPOINT, window.location.search]);


    useEffect(() => {
        socket.on('message', (message) => {

            setMessages([...messages, message]);

        })

        socket.on('roomData', ({ users }) => {
            setUsers(users);
        })

    }, [messages])


    const sendMessage = (e) => {
        e.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));

        }

    }

    // console.log(message, messages);


    return (
        <div className={styles.outerContainer}>

            <div className={styles.container}>
                <InfoBar room={room} />
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />

            </div>
            <PeopleInOneRoom users={users} room={room} />

        </div>
    )
}
export { Chat }