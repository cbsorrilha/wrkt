import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="day">
            <h1>Bem vindo</h1>
            <h2>Você é?</h2>
            <Link to="/cesar">Cesar</Link>
            <Link to="/luana">Luana</Link>
        </div>
    )
}
