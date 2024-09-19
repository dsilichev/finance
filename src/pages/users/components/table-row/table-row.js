import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableRowContainer = ({ className, children }) => (
  <div className={className}>{children}</div>
);

export const TableRow = styled(TableRowContainer)`
  display: flex;
  align-items: center;
  border: ${({ border }) => (border ? '1px solid black' : 'none;')};

  & > div {
    padding: 0 0 0 10px;
    display: flex;
  }

  & .login-column {
    width: 170px;
  }

  & .registered-at-column {
    width: 210px;
  }

  & .role-column {
    width: auto;
  }
`;

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
};
