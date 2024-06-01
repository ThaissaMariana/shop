import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className={styles.footer}>
        <div>
        <Image className={styles.logo}
                width={100}
                height={80}
                src={"https://i.pinimg.com/originals/6e/6d/88/6e6d881c989837d9c959886b88588357.png"} />
        </div>
        <ul className={styles.redes}>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Telegram</a></li>
            <li><a href="#">TikTok</a></li>
            <li><a href="#">Twitter</a></li>
        </ul>
        <p>Empresa fundada em: 24 de agosto de 2006</p>
        </footer>
    );
}