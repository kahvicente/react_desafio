import './index.scss'
import { useState } from 'react'
import axios from 'axios'

export default function Consulta() {
    const [listaCanais, setListaCanais] = useState([])
    const [listaUsuarios, setListaUsuarios] = useState([])
    const [listaProgramas, setListaProgramas] = useState([])
    const [listaProgramasFavoritos, setListaProgramasFavoritos] = useState([])

    async function buscarCanais() {
        const url = `http://localhost:5010/canal`
        let resp = await axios.get(url)

        setListaCanais(resp.data)
    }
    async function buscarUsuarios() {
        const url = `http://localhost:5010/canal/usuario`
        let resp = await axios.get(url)

        setListaUsuarios(resp.data)
    }
    async function buscarProgramas() {
        const url = `http://localhost:5010/canal/programa`
        let resp = await axios.get(url)

        setListaProgramas(resp.data)
    }
    async function buscarProgramasFavoritos() {
        const url = `http://localhost:5010/canal/programa/favorito`
        let resp = await axios.get(url)

        setListaProgramasFavoritos(resp.data)
    }

    return (
        <div className='pagina-consulta'>
            <h1>Consultar Canais</h1>
            <button onClick={buscarCanais}>Buscar</button>

            <div className='form-canais'>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>

                    </tbody>
                </table>
            </div>


            <h1>Consultar Usuários</h1>
            <button onClick={buscarUsuarios}>Buscar</button>

            <div className='form-usuarios'>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                        </tr>
                    </thead>

                    <tbody>
                        {listaUsuarios.map((item, pos) => 
                            <tr key={pos}>
                                <td>{item.id}</td>
                                <td>{item.usuario}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>


            <h1>Consultar Programas</h1>
            <button onClick={buscarProgramas}>Buscar</button>

            <div className='form-programas'>
                <table>
                    <thead>

                    </thead>

                    <tbody>

                    </tbody>
                </table>
            </div>


            <h1>Consultar Programas Favoritos</h1>
            <button onClick={buscarProgramasFavoritos}>Buscar</button>

            <div className='form-programas-favoritos'>
                <table>
                    <thead>

                    </thead>

                    <tbody>

                    </tbody>
                </table>
            </div>

        </div>
    )
}