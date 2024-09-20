"use client"
import {Menu, Transition} from '@headlessui/react'
import React, {Fragment} from "react";
import styles from "./style.module.css"
import Image from "next/image";

export function DropBox() {
    return (
            <Menu as="div" className={styles.menu}>
                    <Menu.Button className={styles.menuButton}><Image
                        className={styles.icon}
                        src="/iconMenu.svg"
                        alt="Категории"
                        width={100}
                        height={100}
                        priority
                    /></Menu.Button>

                    <Transition
                        as={Fragment}
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <Menu.Items className={styles.items}>
                            <Menu.Item as="div" className={styles.item}>
                                {({active}) => (
                                    <a
                                        className={styles.a}
                                        href="/login"
                                    >
                                        Account settings
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item as="div" className={styles.item}>
                                {({active}) => (
                                    <a
                                        className={styles.a}
                                        href="/account-settings"
                                    >
                                        Documentation
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item disabled>
                                <span className="opacity-75"></span>
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>

            </Menu>


    )
}