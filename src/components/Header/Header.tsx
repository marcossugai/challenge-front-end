import "./Header.css"

function Header() {
    return(<>
    <header className="header">
        <div className="header__logotext">
            <img src="../src/assets/img/Vector.svg" alt="Logo da Alura Geek" className="header__logo" />
            <img src="../src/assets/img/AluraGeek.svg" alt="Imagem do Texto da Alura Geek" className="header__text" />
        </div>
        <a href="#" className="header__button">Login</a>
        <img src="../src/assets/img/Search.svg" alt="Imagem busca" className="header__search" />
    </header>
    </>
    )
}

export default Header