import { styled } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserName } from '../../../../selectors';
import { Link } from 'react-router-dom';
import { Icon } from '../../../icon/icon';
import { logout } from '../../../../actions';

const ControlPanelContainer = ({ className }) => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);
  console.log('name', name);
  //
  // login logout pic
  return (
    <div className={className}>
      {name ? (
        <>
          <Icon
            id="fa-sign-out-alt"
            margin="0 0 0 10px"
            onClick={() => dispatch(logout())}
          />
          <div>{name}</div>
          <Icon id="fa-user-circle" margin="0 0 0 10px" size="48px" />
        </>
      ) : (
        <>
          <Link to="/login">Войти</Link>
        </>
      )}
    </div>
  );
};

export const ControlPanel = styled(ControlPanelContainer)`
  display: flex;
  align-items: center;
  gap: 10px;
`;
