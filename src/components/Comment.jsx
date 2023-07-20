import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment ({content, onDeleteComment}){

    function handleDeleteComment() {
        onDeleteComment(content)  
    }
    
   return(
    <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/SuhAQueiroz.png" />
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Suzy Queiroz</strong>
                        <time dateTime="2023-07-27 18:15" title="27 de ajulho às 18:15">Cerca de há 1h atrás</time>
                    </div>
                    <button onClick={handleDeleteComment} title="Deletar comentário">
                        <Trash size={24}/>
                    </button>
                </header>
                <p>{content}</p>  
            </div>
            <footer>
                <button>
                    <ThumbsUp/>
                    Aplaudir<span>20</span>
                </button>  
            </footer>
        </div>
    </div>
   )

}