import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicio from "./pages/inicio"
import Canal from "./pages/canal"
import Usuario from "./pages/usuario"
import Programa from "./pages/programa"
import ProgramaFavorito from "./pages/programaFavorito"

export default function Navegacao () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />}/>
                <Route path="/canal" element={<Canal />}/>
                <Route path="/usuario" element={<Usuario />}/>
                <Route path="/programa" element={<Programa />}/>
                <Route path="/programa/favorito" element={<ProgramaFavorito />}/>
            </Routes>
        </BrowserRouter>
    )
}