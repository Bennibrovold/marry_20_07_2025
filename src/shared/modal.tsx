import styled from "styled-components";

export const Modal = ({ isOpen, onClose, children }: any) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <CloseButton aria-label="Закрыть" onClick={onClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 50 50"
        >
          {" "}
          <path
            fill="#fff"
            d="M 40.783203 7.2714844 A 2.0002 2.0002 0 0 0 39.386719 7.8867188 L 25.050781 22.222656 L 10.714844 7.8867188 A 2.0002 2.0002 0 0 0 9.2792969 7.2792969 A 2.0002 2.0002 0 0 0 7.8867188 10.714844 L 22.222656 25.050781 L 7.8867188 39.386719 A 2.0002 2.0002 0 1 0 10.714844 42.214844 L 25.050781 27.878906 L 39.386719 42.214844 A 2.0002 2.0002 0 1 0 42.214844 39.386719 L 27.878906 25.050781 L 42.214844 10.714844 A 2.0002 2.0002 0 0 0 40.783203 7.2714844 z"
          ></path>{" "}
        </svg>
      </CloseButton>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <div>{children}</div>
      </ModalContainer>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-y: auto;
  -webkit-transition: opacity ease-in-out 0.3s;
  -moz-transition: opacity ease-in-out 0.3s;
  -o-transition: opacity ease-in-out 0.3s;
  transition: opacity ease-in-out 0.3s;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  cursor: pointer;
  padding: 0 20px;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
`;

const ModalContainer = styled.div`
  background: white;
  border-radius: 0px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  padding: 0px;
  width: 100%;
  max-width: 560px;
  transform: scale(1);
  opacity: 1;
  transition: all 0.3s ease;
  margin: 65px auto;
`;

const CloseButton = styled.button`
  position: fixed;
  display: flex;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  font-size: 18px;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    color: #333;
  }
  z-index: 100;

  svg {
    font-size: 18px;
    width: 32px;
    height: 32px;
    color: #ffffff;
  }
`;
