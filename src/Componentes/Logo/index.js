import "./Logo.css"
import logo from "../../Imagens/logo.svg"

const Logo = () => {
    return (
        <div className="logo">
            <img src={logo} alt="Logo do site"></img>
            <p><strong>Alura</strong> Books</p>
        </div>
    )
}

export default Logo