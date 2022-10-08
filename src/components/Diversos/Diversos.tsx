import DiveItem from '../DiveItem/DiveItem'
import './Diversos.css'

function Diversos() {
    return (
        <div className='diversos'>
            <div className='diversos__head'>
                <h3 className='diversos__h3'>Diversos</h3>
                <a className='diversos__a'>Ver tudo <img src='../src/assets/img/Arrow.svg'/></a>
            </div>
            <DiveItem />
        </div>
    )
}

export default Diversos