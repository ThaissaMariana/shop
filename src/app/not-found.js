import Link from 'next/link'
import styles from './components/not-found.module.css'
import './components/footer.module.css';
import './components/menu.module.css';

export default function NotFound() {
    return (
        <main className={styles.centro}>
        <div className={styles.card}>
            <h2 className="">Página não encontrada!</h2>
            <img className={styles.imagem} src="https://annymota.com/wp-content/uploads/2023/05/ERRO1-300x176.png" alt=""></img>
            <a href="/">Retornar para Home</a>
        </div>
        </main>
    );
}