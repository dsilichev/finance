import { ControlPanel, Logo } from './components';
import styled from 'styled-components';

const Description = styled.div`
  font-style: italic;
  align-self: center;
`;

const HeaderContainer = ({ className }) => (
  <header className={className}>
    <Logo />
    <Description>
      Веб-технологии
      <br />
      Написание кода
      <br />
      Разбор ошибок
    </Description>
    <ControlPanel />
  </header>
);

export const Header = styled(HeaderContainer)`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 999;
  height: 120px;
  width: 1000px;
  padding: 20px 40px;
  box-shadow: 0 -2px 10px #000;
  background-color: #fff;
`;
