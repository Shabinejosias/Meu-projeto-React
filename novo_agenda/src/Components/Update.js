import React, { useState, useEffect } from "react";
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function Update() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [telephone, setTelephone] = useState("")
    const navigate = useNavigate();

    const data = {
        name: name,
        email: email,
        telephone: telephone
    }
    const { id } = useParams()

    function handleSubmit(e) {
        e.preventDefault()
        axios.put("http://localhost:5000/user/" + id, data)
            .then(res => {
                if (res.status === 200) {
                    navigate('/')
                }
            })
    }

    const [user, setUser] = useState([])
    useEffect(() => {
        listUser()
    }, [])

    function listUser() {
        axios.get("http://localhost:5000/user/" + id)
            .then(response => {
                console.log(response.data)
                setName(response.data.name)
                setEmail(response.data.email)
                setTelephone(response.data.telephone)
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    value={name} onChange={(e) => setName(e.target.value)}
                />
                <br></br>
                <br></br>
                <input type="text"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                />
                <br></br>
                <br></br>
                <input type="text"
                    value={telephone} onChange={(e) => setTelephone(e.target.value)}
                />
                <br></br>
                <br></br>

                <input type="submit" />


            </form>
        </div>

    )
}