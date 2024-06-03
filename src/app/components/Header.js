import React from "react";
import styles from "./header.module.css";
import Image from "next/image";

export default function Header() {
    return (
        <header className={styles.header}>
        <div>
        <Image className={styles.logo}
                width={100}
                height={80}
                src={"https://i.pinimg.com/originals/6e/6d/88/6e6d881c989837d9c959886b88588357.png"} />
        </div>
        <h1 className={styles.name}>Loja</h1>
        <div>
        <Image className={styles.carrinho}
                width={40}
                height={40}
                src={"https://cdn-icons-png.flaticon.com/512/2916/2916138.png"} />
        </div>
        <div className={styles.todes}>
            <button className={styles.button}>+</button>
        </div>
        <p className={styles.frase}>Encontre tudo o que você precisa em um só lugar! Qualidade, variedade e preços incríveis. Venha conferir!</p>
        </header>
    );
}