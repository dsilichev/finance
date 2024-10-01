import { styled } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserName } from '../../../../selectors';
import { Link } from 'react-router-dom';

const ControlPanelContainer = ({ className }) => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);

  console.log(name);
  // login logout pic
  return (
    <div className={className}>
      {name ? (
        <>
          <div>{name}</div>
          <i class="fas fa-user-circle"></i>
        </>
      ) : (
        <>
          <Link to="/login">Войти</Link>
          <i class="fas fa-user-circle"></i>
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
