import React from 'react';
import Navbar from "./partsHeader/navbar";
import SearchBear from "./partsHeader/searchBear";
import styles from "../assets/styles/partsHomeStyle/headerStyle.module.scss"

const HeaderHome = () => {
    const menu = [
        'HOME',
        'CATEGORY',
        'ABOUT',
    ]

    return (
        <div className={styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <h1>ALCO</h1>
                </div>
                <Navbar values={menu}></Navbar>
                <SearchBear></SearchBear>
            </div>

        </div>
    );
};

export default HeaderHome;