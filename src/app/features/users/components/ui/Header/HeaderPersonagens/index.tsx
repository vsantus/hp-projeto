import logo from "../../../../../../assets/harry-logo-preta.png";

import { Header } from "../HeaderHome/style";
import { Imagem } from "../HeaderHome/style";

export default function HeaderPersonagens() {
    return (
        <Header>
            <Imagem src={logo.src} alt="Logo Harry Potter" />
        </Header>
    );
}