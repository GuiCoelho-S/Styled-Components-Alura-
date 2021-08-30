import { MiniFormStyle } from "./style";
import FormDados from "../Form/";
import MostrarDados from "../MostrarDados";
import { useState } from "react";

const MiniForm = () => {
  const [dadosColetados, setDados] = useState([]);
  const [mudanca, setMudanca] = useState(true);

  function otherPage() {
    setMudanca(!mudanca);
  }

  function storeData(data) {
    setDados(data);
    otherPage();
  }

  return (
    <MiniFormStyle>
      {mudanca ? (
        <FormDados aoEnviar={storeData} />
      ) : (
        <MostrarDados mudar={otherPage} dados={dadosColetados} />
      )}
    </MiniFormStyle>
  );
};

export default MiniForm;

/*

Em salvarDados, caso quisesse colocar mais itens de acordo com o progresso, bastaria meter

setDados({dadosColetados,...dados})
*/
