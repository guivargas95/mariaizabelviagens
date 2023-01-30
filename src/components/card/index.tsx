import { iCard } from "../../types/CardType"

export default function Card({ title, alt, description, image }: iCard) {
    return (
        <div className="h-auto text-center">
            <img className="w-16 ml-auto mr-auto left-0 right-0" src={image} alt="" />
            <h3 className="mt-3">{title}</h3>
            <p>{description}</p>
        </div>
    )
}