export default function About(){
    return(
        <div className="flex flex-col bg-blue-100cl">
            <ul className="p-10 lg:flex items-center text-center border lg:w-auto">
                <li><img className="w-96 mr-auto ml-auto lg:w-auto rounded-2xl shadow-md shadow-my-color2" src="\img\infophoto.jpg" alt="" /></li>
                <li className="flex justify-center lg:w-5/6"><p className="w-96 lg:w-5/6 mt-2 mb-2 font-font1 text-my-color4 font-bold">Olá viajante, tudo bem? Me chamo Maria Izabel e a 10 anos sou coordenadora de grupos de viagens. Meus principais roteiros são para Tríplice Fronteira, Morretes e Cascaneia. Se você quiser embarcar em uma aventura comigo, verifique abaixo as informações e passeios disponíveis, será um prazer ter você em meu grupo!</p></li>
            </ul>             
        </div>
    )
}