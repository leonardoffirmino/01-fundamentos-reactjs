import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';



export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/leonardoffirmino.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Leonardo Ferreira Firmino</strong>
              <time title="30 de Junho às 22:10h" dateTime="2023-06-30 22:00:11">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>


        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>28</span>
          </button>
        </footer>
      </div>
    </div>
  )
}