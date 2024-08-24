export default function Header() {
    return (
        <header>
            <h1>The Blog<span>.</span></h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Categorias</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
            <div>
                <input type="text" name="search" />
                <div>O/</div>
            </div>
        </header>
    )
}