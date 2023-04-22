import React from 'react';
import styles from "../../assets/styles/partsHomeStyle/partsHeaderStyle/searchBearStyle.module.scss"

const SearchBear = () => {
    return (
        <div className={styles.main}>
            <input className={styles.input} type="text"/>
        </div>
    );
};

export default SearchBear;