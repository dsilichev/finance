import { styled } from 'styled-components';
import { Button } from '../button/button';
import { useSelector } from 'react-redux';
import {
  selectModalIsOpen,
  selectModalOnCancel,
  selectModalOnConfirm,
  selectModalText,
} from '../../selectors';

const ModalContainer = ({ className }) => {
  const text = useSelector(selectModalText);
  const isOpen = useSelector(selectModalIsOpen);
  const onConfirm = useSelector(selectModalOnConfirm);
  const onCancel = useSelector(selectModalOnCancel);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={className}>
      <div className="overlay"></div>
      <div className="box">
        <h3>{text}</h3>
        <div className="buttons">
          <Button width="120px" onClick={onConfirm}>
            Да
          </Button>
          <Button width="120px" onClick={onCancel}>
            Нет
          </Button>
        </div>
      </div>
    </div>
  );
};

export const Modal = styled(ModalContainer)`
  position: fixed;
  z-index: 20;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  & .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: grey;
    opacity: 0.7;
  }

  & .box {
    position: relative;
    z-index: 30;
    margin: 0 auto;
    padding: 0 20px 20px;
    width: 400px;
    height: auto;
    top: 50%;
    transform: translate(0, -50%);
    text-align: center;
    background-color: #fff;
    border: 2px solid black;
  }

  & .buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
`;
