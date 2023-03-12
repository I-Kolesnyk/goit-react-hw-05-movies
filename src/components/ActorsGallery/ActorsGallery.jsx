import Actor from "components/Actor/Actor";
import { ActorsList } from "./ActorsGallery.styled";

function ActorsGallery ({actors}) {
    return (
        <ActorsList>
            {actors.map(actor => (
                <Actor key={actor.id} actor={actor}/>
            ))}
        </ActorsList>
    )
}

export default ActorsGallery;