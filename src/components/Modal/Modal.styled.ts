import styled from "@emotion/styled";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalWindow = styled.div`
  width: 60vw;
  min-width: 400px;
  max-width: 800px;
  min-height: 300px;
  border: 1px solid black;
  border-radius: 8px;
  position: relative;
  background-color: #efece9;
  font-size: 20px;
  padding: 20px;

  h3 {
    text-align: center;
  }

  img {
    margin: 0 auto;
  }

  span {
    text-decoration: underline;
    font-weight: 600;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;
