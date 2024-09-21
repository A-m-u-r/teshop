"use client"
import React from 'react';
import Image from "next/image";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { StaticImageData } from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from "./style.module.css";

interface SlideImage {
    src: StaticImageData;
    alt: string;
}


interface SwipeGalleryProps {
    images: SlideImage[];
    spaceBetween?: number;
    slidesPerView?: number;
    loop?: boolean;
    mousewheel?: boolean;
    autoplay?: boolean | {
        delay: number;
        disableOnInteraction: boolean;
    };
    navigation?: boolean;
    pagination?: boolean | { clickable: boolean };
}
//Swiper it's a libriary for a slider-gallery
//Documentation - https://swiperjs.com
const SwipeGallery: React.FC<SwipeGalleryProps> = ({
                                                       images,
                                                       spaceBetween = 50,
                                                       slidesPerView = 1,
                                                       loop = true,
                                                       mousewheel = true,
                                                       autoplay = {
                                                           delay: 2500,
                                                           disableOnInteraction: false,
                                                       },
                                                       navigation = true,
                                                       pagination = { clickable: true },
                                                   }) => {
    return (
        <Swiper
            className={styles.swiper}
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            loop={loop}
            mousewheel={mousewheel}
            keyboard={true}
            autoplay={autoplay}
            navigation={navigation}
            pagination={pagination}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {images.map((image, index) => (
                <SwiperSlide key={index} className={styles.slide}>
                    <Image
                        className={styles.img}
                        src={image.src}
                        alt={image.alt}
                        loading={index === 0 ? "eager" : "lazy"}
                        width={100}
                        height={100}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwipeGallery;
