import React from 'react';



export default function Cadastro_juridica(){
    return(
        <div>
    <form>
        <fieldset>
            <legend>Preencha seus dados</legend>
            <label for="nm_fantasia">Nome Fantasia:
                <input id="nm_fantasia"type="text" name="nome" placeholder="Digite o nome da sua empresa"></input>
            </label>

            <label for="ds_login">Login:
                <input id="ds_login"type="text" name="login" placeholder="Digite um login"></input>
            </label>

            <label for="ds_email">Email:
                <input id="ds_email" type="email" name="email" placeholder="Digite seu email"></input>
            </label>

            <label for="nr_cnpj">CNPJ:
                <input id="nr_cnpj" type="number" name="cnpj" placeholder="Digite o número do seu CNPJ"></input>
            </label>

            <label for="nr_ie">IE:
                <input id="nr_ie"type="number" name="numero ie" placeholder="Digite o número de inscrição estadual"></input>
            </label>

            <label for="dt_fundacao">Data de fundação:
                <input id="dt_fundacao"type="date" name="data_fundacao"></input>
            </label>

            <input type="button" value="Enviar" />

           

        </fieldset>

    </form>

        </div>
    )
}