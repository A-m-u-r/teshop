import React from 'react';
import Image from "next/image";
import {BASKET_ROUTE, PROFILE_ROUTE} from "@/utils/consts";
import styles from './style.module.css'
import {DropBox} from "@/components/UI/DropBox";

interface MenuItem {
    text: string;
    href?: string;
    disabled?: boolean;
}

const Header = () => {
    const menuItems: MenuItem[] = [
        { text: "Account settings", href: "/login" },
        { text: "Documentation", href: "/account-settings" },
        { text: "Disabled item", disabled: true }
    ];

    return (
        <header className={styles.header}>
            <DropBox
                nameButton="Menu"
                iconSrc="/iconMenu.svg"
                menuItems={menuItems}
            />
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