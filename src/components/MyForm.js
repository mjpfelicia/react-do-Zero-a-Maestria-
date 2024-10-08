import React, { useState } from 'react'
import "./MyForm.css"

const MyForm = ({ user }) => {
    // 6 - Controlled inputs
    // 3 - gerenciamento de dados 
    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");

    const [bio, setBio] = useState(user ? user.bio : "");
    const [role, setRole] = useState(user ? user.role : "");

    const handleName = (e) => {
        setName(e.target.value)
    }
    console.log(name);
    // console.log(email)

    const handleSubmit = (event) => {
        // manipularEnviar
        event.preventDefault();
        console.log("Enviando o formulário")
        console.log(name, email, bio, role);

        //7 - limpa formulário
        setName("");
        setEmail("");
        setBio("");
        setRole("")
    }

    return (
        <div className='box_form'>
            {/* 5 - envio de form */}
            {/* 1 - Criando form*/}
            <form onSubmit={handleSubmit}>
                <h1>Form</h1>
                <div>
                    <label htmlFor='name'>Nome</label>
                    <input type='text' name='name' placeholder='Digite seu nome' onChange={handleName} value={name}></input>
                </div>

                {/* 2 - Label envolvendo input */}
                <label>
                    <span>E-mail</span>
                    {/* 4 - simplificação de manipulação de state */}
                    <input type='email' name='email' placeholder='Digite seu e-mail' onChange={(e) => setEmail(e.target.value)} value={email}></input>
                </label>
                {/* 8 -textarea */}

                <label>
                    <span>Bio:</span>
                    <textarea name='bio' placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                </label>

                {/* 9 - select */}
                <label>
                    <span>função no sistema</span>
                    <select name='role' onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>

                <input type='submit' value="Enviar"></input>
            </form>
        </div>
    )
}

export default MyForm;