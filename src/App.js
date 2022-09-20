import './App.css'
import {Component} from 'react'
import { Busca } from './components/busca/busca'
import { Lista } from './components/lista/lista'
import { Cabecalho } from './components/Cabecalho/Cabecalho'
import { Rodape } from './components/rodape/rodape'

class App extends Component{
  state = {
    busca : '',
    odas : []
  }

  componentDidUpdate(){
    console.log(this.state)
  }
  componentDidMount(){
    this.carregaOdas()
  }

  carregaOdas(){
    const {busca} = this.state
    fetch('https://www.bocaweb.com.br/apibocaweb?nome='+busca).then(response => response.json()).then(odas => this.setState({odas}))
  }

  buscaODA = (evento) => {
    this.setState({busca : evento.target.value})
    this.carregaOdas()
  }
  render(){
    const {busca, odas} = this.state
    return(
      <div className='container'>
        <Cabecalho  />
        <section>
          <Busca busca={busca} buscaODA={this.buscaODA}/>
          <Lista odas={odas} busca={busca} />
        </section>
        <Rodape />
      </div>
      )
  }
}

export default App