import React from 'react';
import Image from "next/image";
import {BASKET_ROUTE, PROFILE_ROUTE} from "@/utils/consts";
import styles from './style.module.css'
import {DropBox} from "@/components/UI/DropBox";

const Header = () => {
    return (
        <header className={styles.header}>
            <DropBox/>
            <div className={styles.navBar}>
                <a className={styles.a}>
                    <Image
                        className={styles.icon}
                        src="/iconSearch.svg"
                        alt="Корзина"
                        width={100}
                        height={100}
                        priority
                    />
                </a>

                <a href={BASKET_ROUTE} className={styles.a}>
                    <Image
                        className={styles.icon}
                        src="/iconBusket.svg"
                        alt="Корзина"
                        width={100}
                        height={100}
                        priority
                    />
                </a>

                <a href={PROFILE_ROUTE} className={styles.a}>
                    <Image
                        className={styles.icon}
                        src="/iconProfile.svg"
                        alt="Корзина"
                        width={100}
                        height={100}
                        priority
                    />
                </a>
            </div>
        </header>
    );
};

export default Header;