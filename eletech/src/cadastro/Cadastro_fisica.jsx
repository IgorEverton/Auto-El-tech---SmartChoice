import React from 'react';



export default function Cadastro_fisica() {
  return(
    <div>
        <form method="get">
        <fieldset>
            <legend>Preencha seus dados - Pessoa Fisica</legend>
            <label for="nm_pessoa">Nome:
                <input id="nm_pessoa" type="text" name="nome" placeholder="Digite seu nome"></input>
            </label>

            <label for="ds_login">Login:
                <input id="ds_login" type="text" name="login" placeholder="Digite um login"></input>
            </label>

            <label for="ds_email">Email:
                <input id ="ds_email" type="email" name="email" placeholder="Digite seu email"></input>
            </label>

            <label for="ds_email">CPF:
                <input id="ds_email" type="number" name="cpf" placeholder="Digite seu cpf"></input>
            </label>

            <label for="dt_nascimento">Data de nascimento:
                <input id="dt_nascimento" type="date" name="data_nascimento" placeholder="Digite sua data de nascimento"></input>
            </label>

            <input type="button" value="Enviar"/>

           

        </fieldset>

        </form>

    </div>
  )

}

