"use client"
import React from 'react';
import Image from "next/image";
import {Autoplay, Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from "./style.module.css";

import img1 from './../../../../public/iconBusket.svg'
import img2 from './../../../../public/iconMenu.svg'
import img3 from './../../../../public/iconProfile.svg'
import img4 from './../../../../public/iconSearch.svg'

//Swiper it's a libriary for a slider-gallery
//Documentation - https://swiperjs.com
const SwipeGallery = () => {
    return (
        <Swiper
            className={styles.swiper}
            // install Swiper modules
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            mousewheel={true}
            keyboard={{
                enabled: true,
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            navigation
            pagination={{clickable: true}}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide className={styles.slide}><Image className={styles.img} src={img1} alt={'Image'}
                                                         width={100}
                                                         height={100}/></SwiperSlide>
            <SwiperSlide className={styles.slide}><Image className={styles.img} src={img2} alt={'Image'}
                                                         loading={"lazy"}
                                                         width={100}
                                                         height={100}/></SwiperSlide>
            <SwiperSlide className={styles.slide}><Image className={styles.img} src={img3} alt={'Image'}
                                                         loading={"lazy"}
                                                         width={100}
                                                         height={100}/></SwiperSlide>
            <SwiperSlide className={styles.slide}><Image className={styles.img} src={img4} alt={'Image'}
                                                         loading={"lazy"}
                                                         width={100}
                                                         height={100}/></SwiperSlide>
        </Swiper>
    );
};


export default SwipeGallery;


/*
import Slider from "react-slick";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,

        };
        return (
            <div className={styles.sliderContainer}>
                <Slider {...settings}>
                    <div className={styles.slide}>
                        <Image className={styles.img} src={img1} alt={'Image'} loading={"lazy"}
                               width={100}
                               height={100}/>
                    </div>
                    <div className={styles.slide}>
                        <Image className={styles.img} src={img2} alt={'Image'} loading={"lazy"}
                               width={100}
                               height={100}/>
                    </div>
                    <div className={styles.slide}>
                        <Image className={styles.img} src={img3} alt={'Image'} loading={"lazy"}
                               width={100}
                               height={100}/>
                    </div>
                    <div className={styles.slide}>
                        <Image className={styles.img} src={img4} alt={'Image'} loading={"lazy"}
                               width={100}
                               height={100}/>
                    </div>
                </Slider>
            </div>
        );
    }
}



*/