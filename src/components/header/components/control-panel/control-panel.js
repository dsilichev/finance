import { Link, useNavigate } from 'react-router-dom';
import { Icon, Button } from '../../../../components';
import { styled } from 'styled-components';
import { ROLE } from '../../../../constants';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectUserRole,
  selectUserLogin,
} from '../../../../selectors';
import { logout } from '../../../../actions';
import { checkAccess } from '../../../../utils';

const RightAligned = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const UserName = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const ControlPanelContainer = ({ className }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const roleId = useSelector(selectUserRole);
  const login = useSelector(selectUserLogin);

  const isAdmin = checkAccess([ROLE.ADMIN], roleId);

  return (
    <div className={className}>
      <RightAligned>
        {roleId === ROLE.GUEST ? (
          <Button>
            <Link to="/login">Войти</Link>
          </Button>
        ) : (
          <>
            <UserName>{login}</UserName>
            <Icon
              id="fa-sign-out-alt"
              margin="0 0 0 10px"
              onClick={() => dispatch(logout())}
            />
          </>
        )}
      </RightAligned>
      <RightAligned>
        <Icon id="fa-backward" margin="10px 0 0 0" onClick={() => navigate(-1)} />
        {isAdmin && (
          <>
            <Link to="post">
              <Icon id="fa-file-alt" margin="10px 0 0 15px" />
            </Link>
            <Link to="users">
              <Icon id="fa-users" margin="10px 0 0 15px" />
            </Link>
          </>
        )}
      </RightAligned>
    </div>
  );
};

export const ControlPanel = styled(ControlPanelContainer)`
  // style
`;
