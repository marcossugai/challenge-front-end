import CI1 from './CI1/CI1'
import CI2 from './CI2/CI2'
import CI3 from './CI3/CI3'
import CI4 from './CI4/CI4'
import './ConsoleItem.css'

function ConsoleItem() {
    return(
        <div className="console-item">
            <CI1 />
            <CI2 />
            <CI3 />
            <CI4 />
        </div>
    )
}

export default ConsoleItem