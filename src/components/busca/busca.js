import './busca.css'
export const Busca = ({busca, buscaODA}) =>{
    return(
            <input 
            name='busca'
            type='text'
            value={busca}
            className = 'busca'
            placeholder='o que deseja buscar'
            onChange={buscaODA} />
    )
}