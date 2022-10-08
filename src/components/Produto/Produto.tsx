import Product1 from "./Product1/Product1"
import Product2 from "./Product2/Product2"
import Product3 from "./Product3/Product3"
import Product4 from "./Product4/Product4"
import './Produto.css'

function Produto() {
    return(
        <div className="produto">
            <Product1 />
            <Product2 />
            <Product3 />
            <Product4 />
        </div>
    )
}

export default Produto