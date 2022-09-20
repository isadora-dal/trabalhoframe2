import './lista.css'
export const Lista = ({odas,busca}) =>{
    return(
        <div className='lista'>
            <div className="resultado">Resultado da busca por {busca}: {odas.length} objetos</div>
            {odas.map(oda=>(
                <div key={oda._key} className='oda'>
                    <h1>{oda.nome}</h1>
                    <p className='descricao'>{oda.descricao}</p>
                    <p>tags : {oda.palavras_chave}</p>
                    <p>Submetido em <strong>{oda.data_inclusao}</strong> por <strong>{oda.usuario}</strong></p>
                </div>
            )
            )}
      </div>
    )
}
