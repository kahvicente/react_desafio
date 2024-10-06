import './index.scss'
import { useState } from 'react'
import axios from 'axios'

export default function Programa() {
    const [idCanal, setIdCanal] = useState(0)
    const [nome, setNome] = useState('')
    const [genero, setGenero] = useState('')
    const [horario, setHorario] = useState('')

    return (
        <div className='pagina-programa'>
            <div className='inserir'>
                <h1>Inserir Novo Programa:</h1>

                <label>ID canal:</label>
                <input type="text" value={idCanal} onChange={a => setIdCanal(a.target.value)} />

                <label>Nome:</label>
                <input type="text" value={nome} onChange={a => setNome(a.target.value)} />

                <label>Gênero:</label>
                <input type="text" value={genero} onChange={a => setGenero(a.target.value)} />

                <label>Horário:</label>
                <input type="time" value={horario} onChange={a => setHorario(a.target.value)} />

                <div className='botao'>INSERIR</div>
            </div>
        </div>
    )
}