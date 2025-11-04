import React from "react";

import { Overlay, ModalContent } from "./style";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    persona: any;
}

export default function ModalPersonas({ isOpen, onClose, persona }: ModalProps) {
    if (!isOpen) return null;

    return (
        <Overlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
            </ModalContent>
        </Overlay>
    );

}