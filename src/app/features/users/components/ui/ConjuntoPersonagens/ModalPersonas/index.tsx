import React from "react";
import { Overlay, ModalContent, DescricaoV } from "./style";
import { Descricao, InfoPersonagem, Moldura } from "../Personas/style";

import Paragrafo from "../Personas/Paragrafo";
import Botao from "../../Botao";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    persona: any;
}

export default function ModalPersonas({ isOpen, onClose, persona }: ModalProps) {
  if (!isOpen) return null;

  const { name, house, species, dateOfBirth, gender, patronus, wand, ancestry, actor, image } = persona || {};

  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Botao
          onClick={onClose}
          texto="X"
          width={"22px"}
          height={"22px"}
          borderRadius={"10px"}
        />

        <InfoPersonagem>
          <Moldura background={image ?? ""} size="xl" />

          <Descricao>
            <Paragrafo titulo="Nome:">{name ?? "-"}</Paragrafo>
            <Paragrafo titulo="Casa:">{house ?? "-"}</Paragrafo>
            <Paragrafo titulo="Espécie:">{species ?? "-"}</Paragrafo>
            <Paragrafo titulo="Data de Nasc.:">{dateOfBirth ?? "-"}</Paragrafo>
            <Paragrafo titulo="Gênero:">{gender ?? "-"}</Paragrafo>
            <Paragrafo titulo="Patronus:">{patronus ?? "-"}</Paragrafo>

            {wand && typeof wand === "object" ? (
              <>
                <Paragrafo titulo="Varinha:" />
                <DescricaoV>
                  <Paragrafo titulo="- Madeira:">{wand.wood ?? "-"}</Paragrafo>
                  <Paragrafo titulo="- Núcleo:">{wand.core ?? "-"}</Paragrafo>
                  <Paragrafo titulo="- Comprimento:">
                    {wand.length ? `${wand.length} cm` : "-"}
                  </Paragrafo>
                </DescricaoV>
              </>
            ) : (
              <Paragrafo titulo="Varinha:">-</Paragrafo>
            )}

            <Paragrafo titulo="Ancestralidade:">{ancestry ?? "-"}</Paragrafo>
            <Paragrafo titulo="Ator:">{actor ?? "-"}</Paragrafo>
          </Descricao>
        </InfoPersonagem>
      </ModalContent>
    </Overlay>
  );
}

