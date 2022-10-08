import DI1 from './DI1/DI1'
import DI2 from './DI2/DI2'
import DI3 from './DI3/DI3'
import DI4 from './DI4/DI4'

import './DiveItem.css'

function DiveItem() {
    return(
        <div className="dive-item">
            <DI1 />
            <DI2 />
            <DI3 />
            <DI4 />
        </div>
    )
}

export default DiveItem