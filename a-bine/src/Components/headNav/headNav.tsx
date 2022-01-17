import React from 'react'
import styles from './headNav.module.scss';
import {Link} from 'react-router-dom';
import {FaHome} from 'react-icons/fa';
import {Fade as Hamburger} from 'hamburger-react';

const headNav = () => {
    return (
        <>
            <div className={styles.headerContainer}>
                <div className={styles.homeLink}>
                    <Link className={styles.homeLinkWraper} to='/main'>
                        <FaHome className={styles.homeIcon}/>
                    </Link>
                </div>
                <div className={styles.showData}>
                    <div className={styles.dataWraper}>
                        <p className={styles.temperature}>20℃</p>
                    </div>
                    <p className={styles.humidity}>15%</p>
                </div>
                <div className={styles.menuLink}>
                    <Hamburger direction="left" onToggle={toggled =>{
                        let menuScreen;
                        if(toggled){
                            //open a menu
                            console.log("open menu");
                            menuScreen = <p className={styles.menuList}></p>;
                            
                        } else{
                            //close a menu
                            console.log("close menu");
                        }
                        return(
                            <div className={styles.openMenu}>
                                {menuScreen}
                            </div>
                        )
                    }}/>
                </div>
            </div>
        </>
    )
}

export default headNav
