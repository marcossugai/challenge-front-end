import ConsoleItem from '../ConsoleItem/ConsoleItem'
import './Consoles.css'

function Consoles() {
    return(
        <div className="consoles">
            <div className="consoles__head">
                <h3 className='consoles__h3'>Consoles</h3>
                <a className='starwars__a'>Ver tudo <img src='../src/assets/img/Arrow.svg'/></a>
            </div>
            <ConsoleItem />
        </div>
    )
}

export default Consoles