import styles from "./page.module.css";
import Image from "next/image";
export default async function Product({params}){
    const response = await fetch("https://fakestoreapi.com/products/" + params.id);
    const data = await response.json();
    
    return(
        <main className={styles.main}>
        <div className={styles.card} key={data.id} >
                    <h3>{data.title}</h3>
                    <p>Price: ${data.price}</p>
                    <p>{data.description}</p>
                    <p>Category: {data.category}</p>
                    <p> {data.rating.count}</p>
                    <Image
                    width={100}
                    height={100}
                    src={data.image} />
        </div>
        </main>
     );
}