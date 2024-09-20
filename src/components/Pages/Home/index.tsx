import React from 'react';
import SwipeGallery from "../../UI/Swiper";
import styles from "./style.module.css"

const images = [
    {url: 'iconBusket.svg', description: 'icon' },
    {url: 'iconMenu.svg', description: 'icon' },
    {url: 'iconProfile.svg', description: "icon" },
    {url: 'iconSearch.svg', description: "icon" }
]
const Home = () => {
    return (
        <div className={styles.home}>
        <SwipeGallery/>
        </div>
    );
};

export default Home;