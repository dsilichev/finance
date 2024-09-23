import { Link } from 'react-router-dom';
import { Icon } from '../../../../components';
import styled from 'styled-components';

const LargeText = styled.div`
  font-size: 48px;
  font-weight: 500;
  line-height: 48px;
  margin-top: 5px;
`;

const SmallText = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const LogoContainer = ({ className }) => (
  <Link className={className} to="/">
    <Icon id="fa-code" size="64px"/>
    <div>
      <LargeText>Блог</LargeText>
      <SmallText>веб-разработчика</SmallText>
    </div>
  </Link>
);

export const Logo = styled(LogoContainer)`
  display: flex;
  gap: 5px;
`;
