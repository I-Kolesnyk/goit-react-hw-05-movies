import { getImagePosterPath } from 'utils/getImagePosterPath';
import {
  ActorCard,
  ActorPhoto,
  ActorInfoText,
  ActorInfoWrapper,
  ActorSpanText,
} from './Actor.styled';

function Actor({ actor: { name, profile_path, character } }) {
  const profilePath = getImagePosterPath(profile_path);
  return (
    <ActorCard>
      <ActorPhoto src={profilePath} alt={name} />
      <ActorInfoWrapper>
        <ActorInfoText><ActorSpanText>Name:</ActorSpanText> {name}</ActorInfoText>
        <ActorInfoText><ActorSpanText>Character:</ActorSpanText> {character}</ActorInfoText>
      </ActorInfoWrapper>
    </ActorCard>
    
  );
}

export default Actor;
