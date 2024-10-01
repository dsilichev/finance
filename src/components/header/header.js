import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ControlPanel } from './components/control-panel/control-panel';

const HeaderContainer = ({ className }) => {
  return (
    <div className={className}>
      <div className="page-link-wrap">
        <Link to="/">Главная</Link>
        <Link to="/history">История</Link>
      </div>
      <ControlPanel />
    </div>
  );
};

export const Header = styled(HeaderContainer)`
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100px;
  outline: 1px solid black;

  & .page-link-wrap {
    display: flex;
    gap: 30px;
  }

  & .user-link-wrap {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  & i {
    font-size: 48px;
  }
`;
