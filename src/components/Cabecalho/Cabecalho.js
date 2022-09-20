import './Cabecalho.css'

export const Cabecalho = () =>{
    return(
        <header>
                <div className='left-container'>
                    <div>
                        <img src='logobranco.png' className='logo'></img>
                        <h1>BocaWeb FRONT</h1>
                    </div>
                    <div className='yellow'>
                        <img src='icone-info.png' className='icone'></img>
                        Conheça o BocaWeb
                    </div>
                    <div className='yellow'>   
                    <img src='icone-carta.png' className='icone'></img>
                        Contato
                    </div>
                </div>
                <div className='right-container'>
                    <img src='icone-login.png' class='icone'></img>
                    visitante - Login
                </div>
        </header>
    )
}