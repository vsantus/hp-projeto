import { Header, Imagem } from "../HeaderPersonagens/style";
import logo from "../../../../../../assets/harry-logo-preta.png";


export default function HeaderPersonagens() {
    return (
        <Header>
            <Imagem src={logo.src} alt="Logo Harry Potter" />
        </Header>
    );
}