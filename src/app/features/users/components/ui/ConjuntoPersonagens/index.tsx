"use client";

import { useEffect, useState } from "react";
import {
  Conjunto,
  PaginationWrapper,
  PaginationButton,
  PaginationText,
} from "./style";

import ModalPersonas from "./ModalPersonas";
import { Moldura } from "./Personas/style";
import { Character } from "@/app/services/hp";
import { hpApi } from "@/app/services/hpApi";

import { ArrowLeft, ArrowRight } from "lucide-react";

interface ConjuntoPersonasProps {
  house?: string;
}

const ITEMS_PER_PAGE = 10;

export default function ConjuntoPersonas({ house }: ConjuntoPersonasProps) {
  const [personagens, setPersonagens] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedPersona, setSelectedPersona] = useState<Character | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    let mounted = true;

    async function fetchPersonagens() {
      setLoading(true);
      setError(null);

      try {
        let data: Character[];
        if (house) {
          const normalized = house.toLowerCase();
          data = await hpApi.getByHouse(normalized);
        } else {
          data = await hpApi.getAllCharacters();
        }

        if (!mounted) return;

        const withId = data.map((d, i) => ({
          ...d,
          id: d.id ?? `${d.name ?? i}-${i}`,
        }));

        setPersonagens(withId);


        setCurrentPage(1);
      } catch (err: any) {
        console.error("Erro ao carregar personagens:", err);
        if (mounted) setError(err.message ?? "Erro ao buscar personagens.");
      } finally {
        if (mounted) setLoading(false);
      }
    }

    fetchPersonagens();

    return () => {
      mounted = false;
    };
  }, [house]);

  const handleOpenModal = (persona: Character) => {
    setSelectedPersona(persona);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedPersona(null);
  };

  if (loading) return <p>Carregando personagens...</p>;
  if (error) return <p>Erro ao carregar: {error}</p>;


  const totalPages = Math.ceil(personagens.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleCharacters = personagens.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const nextPage = () => setCurrentPage((p) => Math.min(p + 1, totalPages));
  const prevPage = () => setCurrentPage((p) => Math.max(p - 1, 1));



  return (
    <>
      <Conjunto>
        {visibleCharacters.map((person) => (
          <div
            key={person.id}
            onClick={() => handleOpenModal(person)}
            style={{ cursor: "pointer" }}
          >
            <Moldura background={person.image ?? ""} size="md" />
          </div>
        ))}
      </Conjunto>

      {personagens.length > ITEMS_PER_PAGE && (
        <PaginationWrapper>
          <PaginationButton
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            <ArrowLeft size={14} /> Anterior
          </PaginationButton>

          <PaginationText>
            Página {currentPage} de {totalPages}
          </PaginationText>

          <PaginationButton
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            Próximo <ArrowRight size={14} />
          </PaginationButton>
        </PaginationWrapper>
      )}


      <ModalPersonas
        isOpen={isOpen}
        onClose={handleCloseModal}
        persona={selectedPersona}
      />
    </>
  );
}
