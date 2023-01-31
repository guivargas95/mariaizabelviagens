import Card from "..";

export default function NextTravelsCard() {
    return (
        <section className="">
            <div className="text-center text-3x mt-10 mb-10">
                <h2 className="">Próximos destinos</h2>
            </div>
            <ul className="flex flex-col items-center">
                <li className="h-96 w-3/4 mt-5 mb-5 shadow-lg rounded-md border hover:hover:border-my-color3">
                    <Card title="Morretes" image="\img\morretes.jpg" alt="Foto Cataratas do Iguaçu" description="lorem opsudjk piosdoiaj awoidçlakslf kçawlk dçalksdowkd çlkas~dkao dko wkapdokwa kp" />
                </li>
                <li className="h-96 w-3/4 mt-5 mb-5 shadow-lg rounded-md border hover:hover:border-my-color3">
                    <Card title="Cascaneia" image="\img\cascaneia.jpg" alt="Foto Cataratas do Iguaçu" description="lorem opsudjk piosdoiaj awoidçlakslf kçawlk dçalksdowkd çlkas~dkao dko wkapdokwa kp" />
                </li>
                <li className="h-96 w-3/4 mt-5 mb-5 shadow-lg rounded-md border hover:hover:border-my-color3">
                    <Card title="Foz do Iguaçu" image="\img\cataratas.jpg" alt="Foto Cataratas do Iguaçu" description="lorem opsudjk piosdoiaj awoidçlakslf kçawlk dçalksdowkd çlkas~dkao dko wkapdokwa kp" />
                </li>
            </ul>
        </section>
    )

}