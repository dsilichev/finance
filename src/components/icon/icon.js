import PropTypes from 'prop-types';
import { styled } from 'styled-components';

const IconContainer = ({ className, id, ...props }) => (
  <div className={className} {...props}>
    <i className={`fa ${id}`} aria-hidden="true"></i>
  </div>
);

export const Icon = styled(IconContainer)`
  font-size: ${({ size = '24px' }) => size};
  margin: ${({ margin = '0' }) => margin};
  align-self: center;
  color: ${({ disabled }) => (disabled ? '#ccc' : '#000')};

  &:hover {
    cursor: ${({ cursor = 'pointer' }) => cursor};
`;

Icon.propTypes = {
  id: PropTypes.string.isRequired,
};