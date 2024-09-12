import styles from './Select.module.css'

function Select({type, text, name}){

    return(

        <div className={styles.form_control}>

        <label htmlFor={name}> {text}</label>
        <select name={name} id={name}>

            <option>Selecione uma categoria</option>
            <option>Ficção científica</option>
            <option>Fantasia heróica</option>
            <option>Suspense</option>
            <option>Terror</option>

        </select>



        </div>
    )




}


export default Select