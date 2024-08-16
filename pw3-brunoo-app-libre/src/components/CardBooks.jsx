import style from './CardBooks.module.css';
import Button from './Button';

const CardBooks = ({title, author, img}) => { //Toda arrowfunction anonima toda vez que é chamada, é executada automaticamente - props é um ados externo chamado para um componente, como se fossem "características" - variáveis dentro da arrowfunction

    return(
        <div className={style.cardBooks}>
            <h3 className={style.title}>{title}</h3>
            <p className={style.author}>{author}</p>
            <img src={img} alt={title} title={{title}}/>
            <div>
                <Button label='Detalhe'/>
            </div>
        </div>
    )

}

export default CardBooks;