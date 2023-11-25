import { useState } from 'react'

import Perfil from './components/Perfil'
import './App.css'

const USUARIOS = [
  {
    id: 1,
    nome: 'João',
    email: 'joao@gmail.com',
    imagem: 'https://robohash.org/joao',
    online: true
  },
  {
    id: 2,
    nome: 'Maria',
    email: 'maria@gmail.com',
    imagem: 'https://robohash.org/maria',
    online: false
  },
  {
    id: 3,
    nome: 'Lucas',
    email: 'lucas@gmail.com',
    imagem: 'https://robohash.org/lucas',
    online: true
  }
]

function App() {
  const [usuarios, setUsuarios] = useState(USUARIOS)
  const [nome, setNome] = useState('')

  function adicionarUsuario(event) {
    event.preventDefault()
    const novoUsuario = {
      id: usuarios.length + 1,
      nome: nome,
      email: `${nome}@gmail.com`,
      imagem: `https://robohash.org/${nome}`,
      online: false
    }

    setUsuarios([...usuarios, novoUsuario])
    setNome('')
  }

  function removerUsuario(id) {
    const novosUsuarios = usuarios.filter((x) => x.id !== id)
    setUsuarios(novosUsuarios)
  }

  return (
    <div className="App">
      <h1>Usuários</h1>

      <form onSubmit={adicionarUsuario}>
        <input
          type="text"
          name="nome"
          placeholder="Digite o nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <button className="botao-adicionar" type="submit">
          Adicionar
        </button>
      </form>

      {usuarios.map((usuario) => (
        <Perfil key={usuario.id} usuario={usuario} onRemove={removerUsuario} />
      ))}
    </div>
  )
}

export default App
