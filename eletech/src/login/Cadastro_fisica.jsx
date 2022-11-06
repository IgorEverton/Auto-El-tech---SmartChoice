import React from 'react';



export default function Cadastro_fisica() {
  return(
    <div>
        <form>
        <fieldset>
            <legend>Preencha seus dados</legend>
            <label>Nome:
                <input type="text" name="nm_pessoa"></input>
            </label>

            <label>Digite um login:
                <input type="text" name="ds_login"></input>
            </label>

            <label>Email:
                <input type="email" name="ds_email"></input>
            </label>

            <label>CPF:
                <input type="number" name="ds_email"></input>
            </label>

            <label>Data de nascimento:
                <input type="date" name="dt_nascimento"></input>
            </label>

           

        </fieldset>

        </form>

    </div>
  )

}

