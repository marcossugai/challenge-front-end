import './Product1.css'

function Product1() {
    return(
        <div className="product1">
            <img src="../src/assets/img/Product1.svg" className="produto__img" />
            <p className="produto__p">Produto XYZ</p>
            <h6 className="produto__h6">R$ 60,00</h6>
            <a href="#" className="produto__a">Ver produto</a>
        </div>
    )
}

export default Product1