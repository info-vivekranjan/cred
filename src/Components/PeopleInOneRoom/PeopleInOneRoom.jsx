import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import styles from './PeopleInOneRoom.module.css';

const PeopleInOneRoom = ({ users, room }) => (
    <div className={styles.textContainer}>

        {
            users
                ? (
                    <div>
                        <h3>People chatting in room: {room}</h3>
                        <hr />
                        <div className={styles.activeContainer}>
                            <p>
                                {users.map(({ name }) => (
                                    <div key={name} className={styles.activeUsers}>
                                        {name}
                                        <img alt="Online Icon" src={onlineIcon} />
                                    </div>
                                ))}
                            </p>
                        </div>
                    </div>
                )
                : null
        }
    </div>
);

export { PeopleInOneRoom }
