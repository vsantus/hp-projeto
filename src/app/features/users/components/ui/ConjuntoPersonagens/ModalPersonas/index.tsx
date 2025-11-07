// ModalPersonas.tsx
import React from "react";
import { Overlay, ModalContent, DescricaoV } from "./style";
import { Descricao, InfoPersonagem, Moldura } from "../Personas/style";

import exemplo2 from "@/app/assets/exemplo2.jpg";
import Paragrafo from "../Personas/Paragrafo";
import Botao from "../../Botao";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    persona: any;
}

export default function ModalPersonas({
    isOpen,
    onClose,
    persona,
}: ModalProps) {
    if (!isOpen) return null;

    return (
        <Overlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <Botao onClick={onClose} texto="X" width={"22px"} height={"22px"} borderRadius={"10px"} />
                <InfoPersonagem>
                    <Moldura background={exemplo2} size="xl" />
                    <Descricao>
                        <Paragrafo titulo="Nome:">{persona?.name ?? "-"}</Paragrafo>
                        <Paragrafo titulo="Casa:">{persona?.house ?? "-"}</Paragrafo>
                        <Paragrafo titulo="Espécie:">{persona?.species ?? "-"}</Paragrafo>
                        <Paragrafo titulo="Data de Nasc.:">{persona?.dateOfBirth ?? "-"}</Paragrafo>
                        <Paragrafo titulo="Gênero:">{persona?.gender ?? "-"}</Paragrafo>
                        <Paragrafo titulo="Patronus:">{persona?.patronus ?? "-"}</Paragrafo>
                        <Paragrafo titulo="Varinha:">{persona?.wand ?? "-"}</Paragrafo>
                        <DescricaoV>
                            <Paragrafo titulo="- Madeira:">{"-"}</Paragrafo>
                            <Paragrafo titulo="- Núcleo:">{"-"}</Paragrafo>
                            <Paragrafo titulo="- Comprimento:">{"-"}</Paragrafo>
                        </DescricaoV>
                        <Paragrafo titulo="Ancestralidade:">{persona?.ancestry ?? "-"}</Paragrafo>
                        <Paragrafo titulo="Ator:">{persona?.actor ?? "-"}</Paragrafo>
                    </Descricao>
                </InfoPersonagem>
            </ModalContent>
        </Overlay>
    );
}
