"use client";

import { Header, Imagem } from "../HeaderPersonagens/style";
import logo from "../../../../../../assets/harry-logo-preta.png";
import { useRouter } from "next/navigation";


export default function HeaderPersonagens() {
const router = useRouter();

const handleNavigate = () => {
    router.push("/");
};

    return (
        <Header>
            <Imagem src={logo.src} alt="Logo Harry Potter" onClick={handleNavigate} />
        </Header>
    );
}