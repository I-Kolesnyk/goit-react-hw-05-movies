import { TailSpin } from 'react-loader-spinner';

import { StyledLoader } from './Loader.styled';

const Loader = () => {
  return (
    <StyledLoader>
      <TailSpin color="navy" />
    </StyledLoader>
  );
};

export default Loader;