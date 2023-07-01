/* eslint-disable react/prop-types */
import styles from './Post.module.css';


export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/leonardoffirmino.png" />
          <div className={styles.authorInfo}>
            <strong>Leonardo Ferreira Firmino</strong>
            <span>Back-End Developer</span>
          </div>
        </div>

        <time title="30 de Junho às 22:10h" dateTime="2023-06-30 22:00:11">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galera 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a href="">👉 leonardo.design/doctorcare</a></p>
        <p>
          <a href="">#neverstoplearning</a>{' '} {/* Item para adicionar espaços dentro do JSX  */}
          <a href="">#nlw</a>
        </p>
      </div>


      <form className={styles.comentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentário!'
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

    </article>
  )
}

