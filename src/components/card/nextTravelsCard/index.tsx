import Card from "..";

export default function NextTravelsCard() {
    return (
        <section className="font-padrao bg-paleta-azul3 flex flex-col items-center">
            <div className=" text-white text-center items-center text-lg flex flex-col">
                <h2 className=" mt-5 mb-4 text-4xl text-my-color3 font-bold">Próximos destinos</h2>
            </div>
            <ul className="p-10 h-auto w-96 flex flex-col gap-4 m-1 md:grid md:grid-cols-2 md:w-auto lg:grid-cols-3">
                <li className="shadow-lg rounded-md w-auto h-60 mt-5 relative md:h-auto md:w-48 border hover:hover:border-my-color3">
                    <Card title="Morretes" image="" alt="Foto Cataratas do Iguaçu" description="lorem opsudjk piosdoiaj awoidçlakslf kçawlk dçalksdowkd çlkas~dkao dko wkapdokwa kp" />
                </li>
                <li className="shadow-lg rounded-md w-auto h-60 mt-5 relative md:h-auto md:w-48 border hover:hover:border-my-color3">
                    <Card title="Cascaneia" image="" alt="Foto Cataratas do Iguaçu" description="lorem opsudjk piosdoiaj awoidçlakslf kçawlk dçalksdowkd çlkas~dkao dko wkapdokwa kp" />
                </li>
                <li className="shadow-lg rounded-md w-auto h-60 mt-5 relative md:h-auto md:w-48 border hover:hover:border-my-color3">
                    <Card title="Foz do Iguaçu" image="" alt="Foto Cataratas do Iguaçu" description="lorem opsudjk piosdoiaj awoidçlakslf kçawlk dçalksdowkd çlkas~dkao dko wkapdokwa kp" />
                </li>
            </ul>
        </section>
    )

}