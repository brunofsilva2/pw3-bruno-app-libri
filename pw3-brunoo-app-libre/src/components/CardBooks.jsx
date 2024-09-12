import React from "react";
import style from './CreateBooks.module.css'
import Input from "../forms/Input";
import Select from "../forms/Select";
import Button from "../forms/Button";


const CreateBooks = () => {

    return (
        <section className={style.create_books_container}>
            <h1>Cadastro de livros</h1>

            <Input
                type="text"
                name="text_livro"
                text="Título do livro"
                placeHolder="Digite o nome do seu livro aqui" 
                />

            <Input
                type="text"
                name="text_livro"
                text="Nome do autor"
                placeHolder="Digite o nome do autor aqui" 
                />

            <Input
                type="text"
                name="text_livro"
                text="Descrição do livro"
                placeHolder="Digite a descrição do livro" 
                />


            <Select
                name="categoria"
                text="Escolha uma cetegoria de livro"
            />

            <Button 
            rotulo="Cadastrar livro"
            />
        </section>
    )
}