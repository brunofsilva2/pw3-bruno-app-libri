import style from './NavBar.module.css';

const NavBar = () => {

    return(
        <nav className={style.navbar}>

            <ul className={style.list}>
              <li className={style.logo}><img className={style.logo} src='./book.png'/></li>
              <li className={style.item}>HOME</li>
              <li className={style.item}>CADASTRAR LIVROS</li>
              <li className={style.item}>LISTAR LIVROS</li>
            </ul>

        </nav>
    )

}

export default NavBar;