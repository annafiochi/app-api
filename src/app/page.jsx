import Image from "next/image";
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
      <div className={styles.main}>
        <div className={styles.content}>
          <h1>
            <Image 
              src="/icons/livro.png" 
              alt="Ícone do livro"
              width={50}
              height={50}
              style={{display: 'inline', marginRight: '10px'}}
            />
            Bem vindos ao Loob
          </h1>
          <div className={styles.info}>
            <h2>Informações do Desenvolvedor</h2>
            <p><strong>Nome:</strong> [Anna Clara fiochi]</p>
            <p><strong>Turma:</strong> [2TDS2]</p>
            <p><strong>Site:</strong> Cinema virtual</p>
          </div>
          <p className={styles.description}>
            Bem-vindo ao filmes! Explore filmes populares, 
            descubra novos lançamentos e encontre suas próximas aventuras. 
            Nossa aplicação consome a API do The Movie Database (TMDB) para trazer 
            as informações mais atualizadas do mundo do cinema.
          </p>
          <div className={styles.actions}>
            <Link href="/filmes" className={styles.button}>
              🍿 Ver Filmes Sugeridos
            </Link>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.movieIcon}>
            🎭🎪🎬
          </div>
        </div>
      </div>
  );
}