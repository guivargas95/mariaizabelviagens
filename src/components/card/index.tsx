import { iCard } from "../../types/CardType"

export default function Card({ title, alt, resume, image }: iCard) {
    return (
        <div className="flex flex-col items-center">
            <img className="rounded w-full h-60 ml-auto mr-auto left-0 right-0" src={image} alt="" />
            <h3 className="font-bold mt-3 text-2xl">{title}</h3>
            <p className="text-center mt-6 mb-6 font-font1">{resume}</p>
        </div>
    )
}