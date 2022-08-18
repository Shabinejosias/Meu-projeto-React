import React, { useState, useEffect } from "react";
import axios from "axios"
import { useNavigate } from 'react-router-dom';

export default function Add() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [telephone, setTelephone] = useState("")
    const navigate = useNavigate();

    const data = {
        name: name,
        email: email,
        telephone: telephone
    }

    function handleSubmit(e) {
        e.preventDefault()
        axios.post("http://localhost:5000/user", data)
            .then(res => {
                if (res.status === 200) {
                    navigate('/')
                }
            })
    }

    return (
        <div>
            <h3>Cadatra seu contato</h3>
            <form onSubmit={handleSubmit}>

                <input type="text"
                    value={name} onChange={(e) => setName(e.target.value)}
                    required />

                <br></br>
                <br></br>

                <input type="text"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    required />
                <br></br>
                <br></br>

                <input type="text"
                    value={telephone} onChange={(e) => setTelephone(e.target.value)}
                    required />
                <br></br>
                <br></br>
                <input type="submit" />
                <b><div>NOTA IMPORTANTE:</div></b>
                <div>Favor digitar: http://localhost:3000/  para voltar ao menu principal</div>

            </form>
        </div>

    )
}