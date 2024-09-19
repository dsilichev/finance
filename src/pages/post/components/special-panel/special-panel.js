import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from '../../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_MODAL, openModal, removePostAsync } from '../../../../actions';
import { useNavigate } from 'react-router-dom';
import { checkAccess } from '../../../../utils';
import { ROLE } from '../../../../constants';
import { selectUserRole } from '../../../../selectors';

const SpecialPanelContainer = ({ className, id, publishedAt, editButton }) => {
  const dispatch = useDispatch();
  const userRole = useSelector(selectUserRole);
  const navigate = useNavigate();

  const onPostRemove = (id) => {
    dispatch(
      openModal({
        text: 'Удалить статью?',
        onConfirm: () => {
          dispatch(removePostAsync(id)).then(() => navigate('/'));
          dispatch(CLOSE_MODAL);
        },
        onCancel: () => dispatch(CLOSE_MODAL),
      }),
    );
  };

  const isAdmin = checkAccess([ROLE.ADMIN], userRole);

  return (
    <div className={className}>
      <div className="published-at">
        {publishedAt && (
          <Icon id="fa-calendar" margin="0 10px 0 0" size="18px" cursor="default" />
        )}
        <div>{publishedAt}</div>
      </div>
      {isAdmin && (
        <div className="buttons">
          {editButton}
          {publishedAt && (
            <Icon
              id="fa-trash-alt"
              margin="0 0 0 10px"
              size="18px"
              onClick={() => onPostRemove(id)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export const SpecialPanel = styled(SpecialPanelContainer)`
  display: flex;
  justify-content: space-between;
  margin: ${({ margin = '20px 0' }) => margin};
  font-size: 18px;

  & .buttons {
    display: flex;
    align-items: center;
  }

  & .published-at {
    display: flex;
    align-items: center;
  }
`;

SpecialPanel.propTypes = {
  id: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  editButton: PropTypes.node.isRequired,
};
