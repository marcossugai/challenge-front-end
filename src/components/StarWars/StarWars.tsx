import Produto from '../Produto/Produto'
import './StarWars.css'

function StarWars() {
    return (
        <div className='starwars'>
            <div className='starwars__head'>
                <h3 className='starwars__h3'>Star Wars</h3>
                <a className='starwars__a'>Ver tudo <img src='../src/assets/img/Arrow.svg'/></a>
            </div>
            <Produto />
        </div>
    )
}

export default StarWars