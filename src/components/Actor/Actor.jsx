import PropTypes from 'prop-types';
import {
  ActorCard,
  ActorPhoto,
  ActorInfoText,
  ActorInfoWrapper,
  ActorSpanText,
} from './Actor.styled';

function Actor({ actor: { name, profilePath, character } }) {
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
    profilePath: PropTypes.string,
    character: PropTypes.string.isRequired,
  }).isRequired,
};

export default Actor;
