import './Footer.css'

function Footer() {
    return(
        <footer className="footer">
            <div className="footer__title">
                <img src="../src/assets/img/Vector.svg" alt="Logo da Alura Geek" className="footer__logo" />
                <img src="../src/assets/img/AluraGeek.svg" alt="Imagem do Texto da Alura Geek" className="footer__text" />
            </div>
            <a href='#' className='footer__link'>Quem somos nós</a>
            <a href='#' className='footer__link'>Política de Privacidade</a>
            <a href='#' className='footer__link'>Programa Fidelidade</a>
            <a href='#' className='footer__link'>Nossas lojas</a>
            <a href='#' className='footer__link'>Quero ser franqueado</a>
            <a href='#' className='footer__link'>Anuncie aqui</a>
            <div className='fale'>
                <h3 className='fale__title'>Fale conosco</h3>
                <form className='footer__form'>
                    <div className='footer__form-name'>
                    <label htmlFor="name" className='label'>Nome</label>
                    <input type="text" name="name" id="name" placeholder='André Lisboa' className='input'/>
                    </div>

                    <div>
                    <label htmlFor="message" className='label'>Mensagem</label>
                    <textarea name="message" id="message" placeholder='Escreva sua mensagem' className='input'></textarea>
                    </div>
                </form>
            </div>
        </footer>
    )
}

export default Footer