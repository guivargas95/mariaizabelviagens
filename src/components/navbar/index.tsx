export default function Navbar(){
    return(
        
        <div className="h-25 w-auto lg:flex lg:justify-between bg-blue-400 text-white text-center">
            <img className="ml-auto mr-auto w-72 lg:ml-36" src="\img\mariaizabel_logo.png" alt="" />
            <nav className="">
                <ul className="flex justify-around p-10 lg:mt-20 cl lg:mr-36 text-xl font-font1">
                    <li className=" hover:text-my-color4 hover:font-bold lg:ml-10"><a href="">Início</a></li>
                    <li className=" hover:text-my-color4 hover:font-bold lg:ml-10"><a href="">Destinos</a></li>            
                    <li className=" hover:text-my-color4 hover:font-bold lg:ml-10"><a href="">Contato</a></li>
                </ul>
            </nav>
        </div>
    )
}