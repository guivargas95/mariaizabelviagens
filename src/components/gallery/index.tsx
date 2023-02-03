import listGallery from "./listGallery";
import { iGallery } from "../../types/GalleryType";

export default function Gallery() {


    return (
        <div className="lg:grid lg:grid-cols-2">
          {listGallery.map((itemGallery, index) => (
            <ul className="flex flex-col justify-center mt-10 mb-10">
                <li className="mt-2 mb-2 flex flex-col justify-center text-center">
                <h3 className="font-font2 text-3xl text-my-color4">{itemGallery.title}</h3>
                <img className="w-5/6 ml-auto mr-auto" src={itemGallery.image} alt={itemGallery.alt} />
                </li>
            </ul>
          ))}
        </div>
    )
}