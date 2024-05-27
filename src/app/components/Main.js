import React from "react";
import styles from './main.module.css';

export default async function Main() {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const produtos = await response.json();
    
    return(
        <main className={styles.main}>
            <h2>Produtos</h2>
            {produtos.map((produto) => (
                <div className={styles.produto} key={produto.id} >
                    <h3>{produto.title}</h3>
                    <p>Price: ${produto.price}</p>
                    <p>{produto.description}</p>
                    <p>Category: {produto.category.name}</p>
                    <div className={styles.images}>
                        {produto.images.slice(0, 3).map((image, index) => (
                            <img className={styles.image} key={index} src={image} alt={produto.title} />
                        ))}
                    </div>
                </div>
            ))}
        </main>
    );
}