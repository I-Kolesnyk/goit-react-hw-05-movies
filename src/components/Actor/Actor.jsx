import PropTypes from 'prop-types';
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
        <ActorInfoText>
          <ActorSpanText>Name:</ActorSpanText> {name}
        </ActorInfoText>
        <ActorInfoText>
          <ActorSpanText>Character:</ActorSpanText> {character}
        </ActorInfoText>
      </ActorInfoWrapper>
    </ActorCard>
  );
}

Actor.propTypes = {
  actor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profile_path: PropTypes.string,
    character: PropTypes.string.isRequired,
  }).isRequired,
};

export default Actor;
