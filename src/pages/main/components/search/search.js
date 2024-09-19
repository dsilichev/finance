import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon, Input } from '../../../../components';

const SearchContainer = ({ className, searchPhrase, onChange }) => {
  return (
    <div className={className}>
      <Input value={searchPhrase} placeholder="Поиск" onChange={onChange} />
      <Icon id="fa-search" size="21px" cursor="default" />
    </div>
  );
};

export const Search = styled(SearchContainer)`
  display: flex;
  position: relative;
  margin: 40px auto 0;
  width: 340px;
  height: 40px;

  & input {
    padding: 10px 40px 10px 10px;
  }

  & > div {
    position: absolute;
    right: 9px;
  }
`;

Search.propTypes = {
  searchPhrase: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
