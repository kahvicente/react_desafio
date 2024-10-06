import './index.scss'
import { useState } from 'react'
import axios from 'axios'

export default function ProgramaFavorito() {
    const [idUsuario, setIdUsuario] = useState(0)
    const [idPrograma, setIdPrograma] = useState(0)
    const [avaliacao, setAvaliacao] = useState(0)

    return (
        <div className='pagina-programa-favorito'>
            <div className='inserir'>
                <h1>Inserir Novo Programa Favorito:</h1>

                <label>ID usuário:</label>
                <input type="number" value={idUsuario} onChange={a => setIdUsuario(a.target.value)} />

                <label>ID programa:</label>
                <input type="number" value={idPrograma} onChange={a => setIdPrograma(a.target.value)} />

                <label>Avaliação:</label>
                <input type="number" value={avaliacao} onChange={a => setAvaliacao(a.target.value)} />

                <div className='botao'>INSERIR</div>
            </div>
        </div>
    )
}