import './icones.css'

import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'

const icones = [perfil, sacola]

function Icones () {
  return (
    <ul className='icones'>
    {
     icones.map( (icones) => (
            <li>

              <img className='icone' src={icones} alt="icone de perfil e sacola"></img>

            </li>
            )

       )
    }
    </ul>


)

}

export default Icones;