import React from "react";
import { useState, useEffect } from 'react';
import style from './CreateBooks.module.css'
import Input from "../forms/Input";
import Select from "../forms/Select";
import Button from "../forms/Button";



const CreateBooks = () => {
    
    useEffect(()=> {
        fetch('http://localhost:5000/listagemCateorias', {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Headers':'*',
            }
        }).then(
            (resp)=>
                resp.json()
        ).then(
            (data) => {
                console.log("DATA:" + data.data[0].nome_categoria)
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }, []);
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
                text="Escolha uma categoria de livro"
            />

            <Button 
            rotulo="Cadastrar livro"
            />
        </section>
    )
}

export default CreateBooks