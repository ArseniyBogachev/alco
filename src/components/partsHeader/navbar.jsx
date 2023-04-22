import React from 'react';
import styles from '../../assets/styles/partsHomeStyle/partsHeaderStyle/navbarStyle.module.scss'

const Navbar = (props) => {
    return (
        <div className={styles.menu}>
            <div className={styles.wrapper}>
                {props.values.map(value =>
                    <a href="https://google.com/" className={styles.menu__item} key={value}>{value}</a>
                )}
            </div>
        </div>
    );
};

export default Navbar;