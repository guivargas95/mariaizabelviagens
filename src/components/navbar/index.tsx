export default function Navbar(){
    return(
        
        <div className="h-25 w-auto lg:flex lg:justify-between bg-blue-400 text-white text-center">
            <img className="ml-auto mr-auto w-28 lg:ml-36" src="\img\mariaizabel_logo.png" alt="" />
            <nav className="">
                <ul className="flex justify-around lg:mt-10 lg:mr-36">
                    <li className=" hover:text-my-color4 lg:ml-10"><a href="">Início</a></li>
                    <li className=" hover:text-my-color4 lg:ml-10"><a href="">Destinos</a></li>            
                    <li className=" hover:text-my-color4 lg:ml-10"><a href="">Contato</a></li>
                </ul>
            </nav>
        </div>
    )
}