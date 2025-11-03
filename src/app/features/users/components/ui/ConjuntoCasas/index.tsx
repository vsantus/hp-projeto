import { Conjunto } from "./style";
import Casas from "./Casas";
import grifinoria from "../../../../../assets/grifinoria.jpg";
import sonserina from "../../../../../assets/sonserina.jpg";
import lufalufa from "../../../../../assets/lufalufa.jpg";
import corvinal from "../../../../../assets/corvinal.jpg";

export default function ConjuntoCasas() {
  return (
    <Conjunto>
      <Casas background={grifinoria} />
      <Casas background={sonserina} />
      <Casas background={lufalufa} />
      <Casas background={corvinal} />
    </Conjunto>
  );
}
