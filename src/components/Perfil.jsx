import { useState } from 'react'

export default  function Perfil({ usuario, onRemove }) {
  const [estaOnline, setEstaOnline] = useState(usuario.online)

  return (
    <div className="perfil" >
      <img
        src={usuario.imagem}
        alt={'Foto de ' + usuario.name}
        className={`${estaOnline ? 'online' : 'offline'}`}
        onClick={() => setEstaOnline(!estaOnline)}
      />
      <div className="conteudo">
        <div className="info">
          <strong>{usuario.nome}</strong>
          <span>{usuario.email}</span>
          {estaOnline ? (
            <span className="online">Online</span>
          ) : (
            <span className="offline">Ausente</span>
          )}
        </div>
        <button className="botao-remover" onClick={() => onRemove(usuario.id)}>Remover</button>
      </div>
    </div>
  )
}