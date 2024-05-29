import React from "react";
import styles from "./header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
        <h1>Loja</h1>
        <Image
                width={80}
                height={80}
                src={"https://i.pinimg.com/564x/3d/91/22/3d91226e2fcb32d387402c6a9837df32.jpg"} />
        </header>
    );
}