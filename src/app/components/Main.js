'use client'
import { useEffect, useState } from "react";
import styles from './main.module.css';
import Image from "next/image";
import Spinner from "./Spinner";

export default function Main() {
    const [listProduct, setListProduct] = useState([]);

    useEffect( ()=> {
        const getProduct = async () =>{
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json(); 

            setListProduct(data);
        }
        getProduct();
    }, []);
    
   const orderAz = () =>{
    const newList = [...listProduct].sort( (a,b)=>
          a.title.localeCompare(b.title)
    );
    setListProduct(newList);
   }

   const orderZa = () =>{
    let newList = [...listProduct].sort( (a,b)=>
          a.title.localeCompare(b.title)
    );
    newList = newList.reverse();
    setListProduct(newList);
   }

   const ordermais = () =>{
    const newList = [...listProduct].sort( (a,b)=>
          a.price - b.price
    );
    setListProduct(newList);
   }

   const ordermenos = () =>{
    let newList = [...listProduct].sort( (a,b)=>
          a.price - b.price
    );
    newList = newList.reverse();
    setListProduct(newList);
   }

   if(listProduct[0] == null){
    return <Spinner/>
   }

    return(
        <>
        <div className={styles.fundo}>
            <button className={styles.button} onClick={orderAz}>AZ</button>
            <button className={styles.button} onClick={orderZa}>ZA</button>
            <button className={styles.button} onClick={ordermais}>Menor Preço</button>
            <button className={styles.button} onClick={ordermenos}>Maior Preço</button>
        </div>
       
        <main className={styles.main}>
            <h2 className={styles.h2}>Produtos</h2>
            {listProduct.map((produto) => (
                <div className={styles.card} key={produto.id} >
                    <h3>{produto.title}</h3>
                    <p>Price: ${produto.price}</p>
                    <p>{produto.description}</p>
                    <p>Category: {produto.category}</p>
                    <p> {produto.rating.count}</p>
                    <Image
                    width={100}
                    height={100}
                    src={produto.image} />
                </div>
            ))}
        </main>
        </>
    );
} 