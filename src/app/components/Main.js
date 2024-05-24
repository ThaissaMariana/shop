import React, {useEffect, useState} from "react";

export default function Main() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then(response => response.json())
            .then(data => setProdutos(data));
    }, []);

    return(
        <main className={StyleSheet.main}>
            <h2>Produtos</h2>
            {produtos.map((produto) => (
                <div key={produto.id} className={StyleSheet.produto}>
                    <h3>{produto.title}</h3>
                    <p>Price: ${produto.price}</p>
                    <p>{produto.description}</p>
                    <p>Category: {produto.category.name}</p>
                    <div className={styles.images}>
                        {produto.images.slice(0, 3).map((image, index) => (
                            <img key={index} src={image} alt={produto.title} className={styles.image}/>
                        ))}
                    </div>
                </div>
            ))}
        </main>
    );
}