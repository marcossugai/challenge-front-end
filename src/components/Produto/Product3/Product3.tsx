import './Product3.css'

function Product3() {
    return(
        <div className="product3">
            <img src="../src/assets/img/Product3.svg" className="produto__img" />
            <p className="produto__p">Produto XYZ</p>
            <h6 className="produto__h6">R$ 60,00</h6>
            <a href="#" className="produto__a">Ver produto</a>
        </div>
    )
}

export default Product3