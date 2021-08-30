import { Button } from "../../UI/button";
import {
  MostrarDado,
  Nome,
  Profissao,
  Language,
  SemExperiencia,
} from "./style";

import cPlusPlus from "../../assets/icons/c++.png";
import csharp from "../../assets/icons/cSharp.png";
import elang from "../../assets/icons/elang.png";
import java from "../../assets/icons/java.png";
import javascript from "../../assets/icons/js.png";
import php from "../../assets/icons/php.png";
import python from "../../assets/icons/python.png";
import sql from "../../assets/icons/sql.png";
import ruby from "../../assets/icons/ruby.png";

import { IconLanguage } from "../../UI/iconLanguage";

const MostrarDados = ({ dados, mudar }) => {
  var arr = dados.valueCheckBox;
  var languages = arr.filter((element, i) => arr.indexOf(element) === i); // Essa função é para retirar elementos repetidos, e não renderizá-los
  console.log(dados);

  const showImg = (dados) => {
    switch (dados) {
      case "javascript":
        return <IconLanguage src={javascript} />;
      case "cplusplus":
        return <IconLanguage src={cPlusPlus} />;
      case "csharp":
        return <IconLanguage src={csharp} />;
      case "java":
        return <IconLanguage src={java} />;
      case "python":
        return <IconLanguage src={python} />;
      case "php":
        return <IconLanguage src={php} />;
      case "ruby":
        return <IconLanguage src={ruby} />;
      case "elang":
        return <IconLanguage src={elang} />;
      case "sql":
        return <IconLanguage src={sql} />;
      default:
        break;
    }
  };

  return (
    <MostrarDado>
      {dados.input !== "" ? (
        <Nome>{dados.input}</Nome>
      ) : (
        <Nome>Nome não definido</Nome>
      )}
      <div>
        {dados.number !== "" ? (
          <p>{`Experiência: ${dados.number} meses`}</p>
        ) : (
          <SemExperiencia>
            Você não tem experiência? kk, welcome to club my friendo{" "}
          </SemExperiencia>
        )}
        {dados.radio !== "" ? (
          <Profissao>{`Você se considera ${dados.radio}`}</Profissao>
        ) : (
          <Profissao>Você não é de uma dessas áreas :(</Profissao>
        )}
      </div>
      <div>
        <div>
          <h2>{`Essas são as tecnologias que você se considera bom:`}</h2>
        </div>
      </div>
      <Language>
        {languages.length === 0 ? (
          <Nome>Nenhuma '-'</Nome>
        ) : (
          languages.map((language) => showImg(language))
        )}
      </Language>
      <Button primary onClick={mudar}>
        Voltar
      </Button>
    </MostrarDado>
  );
};

export default MostrarDados;
