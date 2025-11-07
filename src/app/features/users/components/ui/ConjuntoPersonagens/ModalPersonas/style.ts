import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  background: var(--preto-bg-modal);
  color: white;
  padding: 25px;
  border-radius: 12px;
  width: 704px;
  height: 453px;
  text-align: center;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;

  img {
    width: 150px;
    border-radius: 8px;
  }

  button {
    margin-top: 15px;
    padding: 8px 16px;
    border: none;
    background: #222;
    color: white;
    border-radius: 6px;
    cursor: pointer;
  }  
  `;

  export const DescricaoV = styled.div`

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
  width: 100%;
  gap: 4px;
  `;
