import React from 'react';



export default function Cadastro_juridica(){
    return(
        <div>
    <form>
        <fieldset>
            <legend>Preencha seus dados</legend>
            <label>Nome Fantasia:
                <input type="text" name="nm_fantasia"></input>
            </label>

            <label>Digite um login:
                <input type="text" name="ds_login"></input>
            </label>

            <label>Email:
                <input type="email" name="ds_email"></input>
            </label>

            <label>CNPJ:
                <input type="number" name="nr_cnpj"></input>
            </label>

            <label>IE:
                <input type="number" name="nr_ie"></input>
            </label>

            <label>Data de fundação:
                <input type="date" name="dt_fundacao"></input>
            </label>

           

        </fieldset>

    </form>

        </div>
    )
}