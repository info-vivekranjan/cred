import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import styles from './Join.module.css';

function Join() {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')



    const handleJoin = (e) => {
        return (!name || !room) ? e.preventDefault() : null;
    }


    return (
        <div className={styles.joinOuterContainer}>
            <div className={styles.joinInnerContainer}>
                <h1 className={styles.heading}>Join</h1>

                <div>
                    <input placeholder="Name" onChange={(e) => setName(e.target.value)} className={styles.joinInput} />
                </div>

                <div>
                    <input placeholder="Room" onChange={(e) => setRoom(e.target.value)} className={cx(styles.joinInput, styles.marginTop20)} />
                </div>

                <Link onClick={handleJoin} to={`/chat?name=${name}&room=${room}`}>
                    <button className={cx(styles.buttonSubmit, styles.marginTop20)} type="submit">Join</button>
                </Link>

            </div>
        </div>
    )
}
export { Join }