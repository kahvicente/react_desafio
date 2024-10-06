import './index.scss'
import { useState } from 'react'
import axios from 'axios'

export default function Usuario() {
    const [nome, setNome] = useState('')

    async function inserir() {
        const url = `http://localhost:5010/canal/usuario`
        await axios.post(url, nome)
    }

    return (
        <div className='pagina-usuario'>
            <div className='inserir'>
                <h1>Inserir novo Usuário:</h1>

                <label>Nome:</label>
                <input type="text" value={nome} onChange={a => setNome(a.target.value)} />

                <div className='botao'>INSERIR</div>
            </div>

            <div className='alterar'>

            </div>
        </div>
    )
}