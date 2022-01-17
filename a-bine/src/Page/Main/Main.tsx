import React from 'react'
import styles from './Main.module.scss';
import Video from "../../Components/backgroundVideo/backgroundVideo";
import HeadNav from '../../Components/headNav/headNav';

const Main = () => {
    return (
        <>
            <div className={styles.container}>
                <Video className={styles.backgroundVideo}/>
                <HeadNav/>
                <div className={styles.mainArea}> 
                    <p className={styles.title}>Hello</p> 
                    <h1 className={styles.serviceTitle}>A-bine</h1>
                    <p className={styles.titleExplain}>A-Bine is a wine celler with complex functions that gives
                        you more value than storage.
                        <br/>Beyond simple wine storage. we provides more comportable experience
                        <br/>such as recommendations, recipes, and controls through displays.</p>
                </div>
            </div>
        </>
    )
}

export default Main
