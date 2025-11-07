import styled from "styled-components";

interface BtnProps {
  width?: string;
  height?: string;
  borderRadius?: string;
}

export const Btn = styled.div<BtnProps>`
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius};`}
  background: var(--amarelo-mostarda);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;

  &:hover {
    transform: scale(1.03);
    opacity: 0.9;
  }
`;


export const Texto = styled.p`
  color: var(--azul-bg);
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  margin: 0;
`;
