import React, { useState, useEffect } from "react";

import axios from 'axios'

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function List() {
    const [user, setUser] = useState([])
    useEffect(() => {
        listUser()
    }, [])

    function listUser() {
        axios.get("http://localhost:5000/user")
            .then(response => {
                console.log(response.data)
                setUser(response.data)
            })
    }

    const handleRemove = (id) => {
        if (window.confirm('tem certeza de excluir esse usuáorio')) {
            axios.delete("http://localhost:5000/user/" + id).then((response) => {
                listUser()
            });
        }
    }

    return (
        <div>
            <h1>Minha agenda de contato</h1>
            <Link to="/add">
                <button>Add</button>
            </Link>
            <table border="1px" width="100%" className="table">
                <thead className="thead">
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telephone</th>
                        <th>Acões</th>
                    </tr>
                </thead>
                <tbody className="tbody">


                    {

                        user.map((dados, id) => (

                            <tr key={id}>
                                <td data-label="Nome">{dados.name}</td>
                                <td data-label="Nome">{dados.email}</td>
                                <td data-label="Nome">{dados.telephone}</td>

                                <td data-label="Ações" className="action">
                                    <Link to={`/update/${dados.id}`}>
                                        <button className="btn">Editar</button>

                                    </Link>


                                    <button onClick={() => handleRemove(dados.id)} className="btn">Excluir</button>
                                </td>
                            </tr>
                        ))


                    }
                </tbody>

            </table>
        </div>
    )
}