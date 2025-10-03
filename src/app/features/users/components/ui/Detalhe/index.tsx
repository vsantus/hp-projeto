import Image from 'next/image';
import hogwartsShield from '../../../../../assets/hogwarts-shield.png';
import { Container, Linha, Titulo } from './style';

interface DetalheProps {
    titulo: string;
}


export default function Detalhe({ titulo }: DetalheProps) {
    return (
        <Container>
            <Image src={hogwartsShield} alt="Hogwarts Shield" width={72} height={84} />
            <Titulo>{titulo}</Titulo>
            <Linha />
        </Container>
    );
} 