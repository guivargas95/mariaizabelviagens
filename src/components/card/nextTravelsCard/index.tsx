import Card from "..";

export default function NextTravelsCard() {
    return (
        <section className="bg-gradient-to-b from-blue-100 to-blue-300 flex flex-col items-center">
            <div className="text-center text-3xl p-20 font-bold ">
                <h2 className="font-font2 ">Próximos destinos</h2>
            </div>
            <ul className="flex flex-col text-center items-center text-amber-100 lg:grid lg:grid-cols-3 w-96 lg:w-full">
                <li className="bg-my-color3 shadow-lg shadow-my-color5 h-full lg:h-fit w-3/4 mt-5 mb-5 lg:ml-auto lg:mr-auto  rounded-md hover:scale-105 hover:ease-in duration-300">
                    <a href=""><Card title="Morretes" image="\img\morretes.jpg" alt="Foto Morretes" resume="Você sabia que um dos passeios de trem mais espetaculares do mundo, fica aqui no Paraná? Venha viver essa experiência conosco!" /></a>
                </li>
                <li className="bg-my-color3 shadow-lg shadow-my-color5 h-full lg:h-fit w-3/4 mt-5 mb-5 lg:ml-auto lg:mr-auto rounded-md hover:scale-105 hover:ease-in duration-300">
                    <a href=""><Card title="Cascaneia" image="\img\cascaneia.jpg" alt="Foto Cascaneia" resume="A Cascanéia é reconhecida por ser o melhor parque aquático do sul do Brasil e o 5º melhor da América Latina. Que tal embarcar nesta aventura e curtir tudo o que só o melhor parque aquático do sul tem para oferecer?" /></a>
                </li>
                <li className="bg-my-color3 shadow-lg shadow-my-color5 h-full lg:h-fit w-3/4 mt-5 mb-5 lg:ml-auto lg:mr-auto  rounded-md hover:scale-105 hover:ease-in duration-300">
                    <a href=""><Card title="Foz do Iguaçu" image="\img\cataratas.jpg" alt="Foto Cataratas do Iguaçu" resume="Visite a Maravilha Mundial da Natureza e viva as mais raras experiências de contato com a natureza, no maior conjunto de quedas d’água do mundo, na cidade de Foz do Iguaçu." /></a>
                </li>
                <li className="bg-my-color3 shadow-lg shadow-my-color5 h-full lg:h-fit w-3/4 mt-5 mb-5 lg:ml-auto lg:mr-auto  rounded-md hover:scale-105 hover:ease-in duration-300">
                    <a href=""><Card title="Barco Príncipe" image="\img\barco.jpg" alt="Foto Cataratas do Iguaçu" resume="O Barco Príncipe de Joinville é a única embarcação em sua categoria em atividade na costa brasileira. Opera a partir da cidade de Joinville (SC), navegando pela Baía da Babitonga, por entre as diversas ilhas do seu belo arquipélago. Será que você é sortudo de encontrar golfinhos pelo caminho? Venha descobrir conosco!" /></a>
                </li>
                <li className="bg-my-color3 shadow-lg shadow-my-color5 h-full lg:h-fit w-3/4 mt-5 mb-5 lg:ml-auto lg:mr-auto  rounded-md hover:scale-105 hover:ease-in duration-300">
                    <a href=""><Card title="Beto Carrero World" image="\img\beto.jpg" alt="Foto Cataratas do Iguaçu" resume="Considerado o maior parque temático da América Latina, o Beto Carrero World conta com mais de 100 atrações, e o melhor: pertinho de você!! Venha" /></a>
                </li>
            </ul>
        </section>
    )

}