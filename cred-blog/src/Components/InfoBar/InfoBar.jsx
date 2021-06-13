import React from 'react';
import styles from './InfoBar.module.css';
import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';


function InfoBar({ room }) {
    return (
        <div className={styles.infoBar}>
            <div className={styles.leftInfoBarContainer}>
                <img className={styles.onlineIcon} src={onlineIcon} alt="online Icon" />
                <h3>{room}</h3>
            </div>
            <div className={styles.rightInfoBarContainer}>
                <a href="/joinmeeting"><img src={closeIcon} alt="close Icon" /></a>
            </div>
        </div>
    )
}
export { InfoBar }