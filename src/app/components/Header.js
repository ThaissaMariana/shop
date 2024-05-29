import React from "react";
import styles from "./header.module.css";
import Image from "next/image";

export default function Header() {
    return (
        <header className={styles.header}>
        <h1>Loja</h1>
        <div>
        <Image
                width={80}
                height={80}
                src={"https://pngfre.com/wp-content/uploads/hello-kitty-poster.png"} />
        </div>
        
        </header>
    );
}