import React from 'react'
import Video from './bkVideo.mp4';
import styles from '../../Page/Main/Main.module.scss';

class MyVideoComponent extends React.Component {
    render() {
        return (
            <div className={styles.backgroundArea}>
                <video className={styles.backgroundVideo} muted autoPlay loop>
                    <source src={Video} type="video/mp4"/>
                </video>
            </div>
        );
    }
}

export default MyVideoComponent
