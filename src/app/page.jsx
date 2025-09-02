
import Image from "next/image";

export default function Home() {
  return (
      <div className={styles.main}>
        <div className={styles.content}>
          <h1>Bem-Vindo ao AuraCooks</h1>
          <p>
            Descubra deliciosas receitas de todo o mundo em uma experiência
            interativa feita em Next.js 15. Nossa aplicação consome dados de uma
            API de receitas, apresentando ideias saborosas, ingredientes e
            instruções de preparo de forma prática e envolvente. Explore,
            inspire-se e encontre sua próxima criação culinária!
          </p>
        </div>
        <div className={styles.image}>
          <Image
            src="/images/salada.png"
            alt="Foto de uma salada de alface e batata"
            width={500}
            height={500}
            className={styles.image}
          />
        </div>
      </div>
  );
}