import React from 'react';
import HeaderHome from "../components/headerHome";
import BodyHome from "../components/bodyHome";
import styles from "../assets/styles/homeStyle.module.scss"

const Home = () => {
    return (
        <div className={styles.main}>
            <HeaderHome></HeaderHome>
            <BodyHome></BodyHome>
        </div>
    );
};

export default Home;