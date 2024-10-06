import './index.scss'
import { useState } from 'react'
import axios from 'axios'

export default function Canal() {
    const [nome, setNome] = useState('')
    const [numero, setNumero] = useState(0)
    const [aberto, setAberto] = useState(false)

    return (
        <div className='pagina-canal'>
            <div className='inserir'>
                <h1>Inserir Novo Canal:</h1>

                <label>Nome:</label>
                <input type="text" value={nome} onChange={a => setNome(a.target.value)}/>

                <label>Número:</label>
                <input type="number" value={numero} onChange={a => setNumero(a.target.value)} />

                <input type="checkbox" value={aberto} onChange={a => setAberto(a.target.checked)}/>
                <label>Aberto</label>

                <div className='botao'>INSERIR</div>
            </div>
            
            <div className='alterar'></div>
        </div>
    )
}