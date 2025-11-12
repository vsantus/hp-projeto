import styled from "styled-components";

export const Conjunto = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 275px);
  justify-content: space-around;
  width: 100%;
  gap: 25px;
  margin-top: 40px;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 20px;
`;

export const PaginationButton = styled.button<{ disabled?: boolean }>`
  justify-content: center;
  display: flex;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background: var(--amarelo-mostarda);
  color: black;
  font-weight: 600;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: all 0.2s ease;

  &:hover {
    transform: ${({ disabled }) => (disabled ? "none" : "scale(1.03)")};
  }
`;

export const PaginationText = styled.span`
  color: white;
  font-weight: 500;
  font-size: 1rem;
`;
