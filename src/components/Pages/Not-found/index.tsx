import React from 'react';
import Image from "next/image";
import mark2 from './../../../../public/mark.svg'
import styles from './style.module.css'

const NotFoundPage = () => {
    return (
        <div className={styles.notfound}>
            <div className={styles.text}>
                Упс... <br/>
                Похоже это битая ссылка!
            </div>
            <Image
                className={styles.img}
                src={mark2}
                alt={"Битый марк"}
                width={100}
                height={100}
            />
        </div>
    );
};

export default NotFoundPage;