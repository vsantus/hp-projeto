import styled from "styled-components";

import background from "../assets/background-2.png";
import "../styles/variables.scss";

export const LayoutPersonagens = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${background.src});
   display: flex;
  justify-content: center;
`;

export const Container = styled.div`
margin-top: 2rem;
gap: 2rem;
width: 1363px;
`;
