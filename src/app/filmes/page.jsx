'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './filmes.module.css';

export default function Filmes() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchFilmes = async () => {
      try {
      
        const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=12');
        
        if (!response.ok) {
          throw new Error('Erro ao buscar filmes');
        }
        
        const data = await response.json();
        er
        const filmesSimulados = data.map((item, index) => ({
          id: item.id,
          title: `Filme ${index + 1}: ${item.title.split(' ').slice(0, 3).join(' ')}`,
          poster: item.thumbnailUrl,
          year: 2020 + (index % 5),
          rating: (8 + Math.random() * 2).toFixed(1),
          genre: ['Ação', 'Drama', 'Comédia', 'Ficção Científica', 'Terror'][index % 5]
        }));
        
        setFilmes(filmesSimulados);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFilmes();
  }, []);

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>
          <h2>🎬 Carregando filmes...</h2>
          <div className={styles.spinner}></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>
          <h2>❌ Erro: {error}</h2>
          <Link href="/" className={styles.backButton}>
            Voltar ao Início
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/" className={styles.backButton}>
          ← Voltar
        </Link>
        <h1>🍿 Filmes Sugeridos</h1>
        <p>Descubra os melhores filmes para assistir</p>
      </header>

      <div className={styles.filmesGrid}>
        {filmes.map((filme) => (
          <div key={filme.id} className={styles.filmeCard}>
            <div className={styles.posterContainer}>
              <img 
                src={filme.poster} 
                alt={filme.title}
                className={styles.poster}
              />
              <div className={styles.overlay}>
                <button className={styles.watchButton}>
                  ▶️ Assistir
                </button>
              </div>
            </div>
            <div className={styles.filmeInfo}>
              <h3 className={styles.filmeTitle}>{filme.title}</h3>
              <div className={styles.filmeDetails}>
                <span className={styles.year}>{filme.year}</span>
                <span className={styles.rating}>⭐ {filme.rating}</span>
              </div>
              <p className={styles.genre}>{filme.genre}</p>
            </div>
          </div>
        ))}
      </div>

      <footer className={styles.footer}>
        <p>Powered by CineStand Virtual API</p>
      </footer>
    </div>
  );
}
