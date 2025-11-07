"use client";
import { useState } from "react";
import { Conjunto } from "./style";
import ModalPersonas from "./ModalPersonas";

import exemplo from "@/app/assets/exemplo.jpg";
import { Moldura } from "./Personas/style";

export default function ConjuntoPersonas() {
    const [selectedPersona, setSelectedPersona] = useState<any>(null);
    const [isOpen, setIsOpen] = useState(false);

    const personagens = [
        { id: 1, name: "Harry Potter", house: "Gryffindor", actor: "Daniel Radcliffe", image: exemplo },
        { id: 2, name: "Hermione Granger", house: "Gryffindor", actor: "Emma Watson", image: exemplo },
        { id: 3, name: "Ron Weasley", house: "Gryffindor", actor: "Rupert Grint", image: exemplo },
        { id: 4, name: "Draco Malfoy", house: "Slytherin", actor: "Tom Felton", image: exemplo },
        { id: 5, name: "Luna Lovegood", house: "Ravenclaw", actor: "Evanna Lynch", image: exemplo },
        { id: 6, name: "Neville Longbottom", house: "Gryffindor", actor: "Matthew Lewis", image: exemplo },
        { id: 7, name: "Sirius Black", house: "Gryffindor", actor: "Gary Oldman", image: exemplo },
        { id: 8, name: "Bellatrix Lestrange", house: "Slytherin", actor: "Helena Bonham Carter", image: exemplo },
        { id: 9, name: "Remus Lupin", house: "Gryffindor", actor: "David Thewlis", image: exemplo },
        { id: 10, name: "Severus Snape", house: "Slytherin", actor: "Alan Rickman", image: exemplo },
    ];

    const handleOpenModal = (persona: any) => {
        setSelectedPersona(persona);
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
        setSelectedPersona(null);
    };

    return (
        <>
            <Conjunto>
                {personagens.map((person) => (
                    <div key={person.id} onClick={() => handleOpenModal(person)}>
                        <Moldura background={person.image} size="md" />
                    </div>
                ))}
            </Conjunto>

            <ModalPersonas
                isOpen={isOpen}
                onClose={handleCloseModal}
                persona={selectedPersona}
            />
        </>
    );
}
