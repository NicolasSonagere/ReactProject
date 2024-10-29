export function BarraNavegacao(){
    return(
        <nav className="fixed h-screen flex-col w-[100px] bg-black text-white items-center flex justify-center px-20">
            <ul className="h-1/3 items-center flex flex-col justify-between">
                <li>Home</li>
                <li>Pesquisar</li>
                <li>Favoritos</li>
            </ul>
        </nav>
    )
}