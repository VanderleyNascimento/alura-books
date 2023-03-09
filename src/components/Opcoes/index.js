const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE', 'SOBRE', ]

function Opcoes () {
    return (
        <ul className='opcoes'>
        { textoOpcoes.map( (texto) => (
         <li className='opcao'><p>{texto}</p></li>
            ) ) }

</ul>

    )
}

export default Opcoes;