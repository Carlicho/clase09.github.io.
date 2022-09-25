import "bootstrap/dist/css/bootstrap.css"

const Header = (props) => {
    return(
        <header className="alert alert-primary text center mb-0">
            <h1 display-1>{props.titulo}</h1>
        </header>
    )

}

export default Header;