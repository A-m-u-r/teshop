"use client"
import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from "react";
import styles from "./style.module.css"
import Image, { StaticImageData } from "next/image";

interface MenuItem {
    text: string;
    href?: string;
    disabled?: boolean;
}

interface DropBoxProps {
    nameButton: string;
    iconSrc?: string | StaticImageData;
    menuItems: MenuItem[];
    buttonClassName?: string;
    itemsClassName?: string;
    itemClassName?: string;
    linkClassName?: string;
}

export function DropBox({
                            nameButton,
                            iconSrc = "/iconMenu.svg",
                            menuItems,
                            buttonClassName = styles.menuButton,
                            itemsClassName = styles.items,
                            itemClassName = styles.item,
                            linkClassName = styles.a
                        }: DropBoxProps) {
    return (
        <Menu as="div" className={styles.menu}>
            <Menu.Button className={buttonClassName}>
                <Image
                    className={styles.icon}
                    src={ iconSrc}
                    alt={nameButton}
                    width={100}
                    height={100}
                    priority
                />
            </Menu.Button>

            <Transition
                as={Fragment}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <Menu.Items className={itemsClassName}>
                    {menuItems.map((item, index) => (
                        <Menu.Item key={index} as="div" className={itemClassName} disabled={item.disabled}>
                            {({active}) => (
                                item.disabled ? (
                                    <span className="opacity-75">{item.text}</span>
                                ) : (
                                    <a
                                        className={linkClassName}
                                        href={item.href}
                                    >
                                        {item.text}
                                    </a>
                                )
                            )}
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
