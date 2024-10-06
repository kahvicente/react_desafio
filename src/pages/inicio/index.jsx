import './index.scss'
import { Link } from 'react-router-dom'

export default function Inicio() {
    return (
        <div className='pagina-inicio'>

            <div className='paginas'>
                <Link to='/canal'>Canal</Link>
                <Link to='/usuario'>Usuário</Link>
                <Link to='/programa'>Programa</Link>
                <Link to='/programa/favorito'>Programa Favorito</Link>
            </div>

        </div>
    )
}