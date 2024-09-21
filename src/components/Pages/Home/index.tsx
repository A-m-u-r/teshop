import React from 'react';
import SwipeGallery from "../../UI/Swiper";
import styles from "./style.module.css"
import img1 from './../../../../public/iconBusket.svg';
import img2 from './../../../../public/iconMenu.svg';
import img3 from './../../../../public/iconProfile.svg';
import img4 from './../../../../public/iconSearch.svg';


const Home = () => {
    const images: SlideImage[] = [
        { src: img1, alt: 'Basket' },
        { src: img2, alt: 'Menu' },
        { src: img3, alt: 'Profile' },
        { src: img4, alt: 'Search' },
    ];

    return (
        <div className={styles.home}>
            <SwipeGallery
                images={images}
                autoplay={{ delay: 3000, disableOnInteraction: true }}
                navigation={false}
            />
        </div>
    );
};

export default Home;