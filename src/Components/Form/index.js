import {
  Form,
  Input,
  InputNumber,
  Options,
  ContainerCheckBox,
  Texto,
} from "./style";
import RadioButton from "../../UI/radioButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Button } from "../../UI/button";
import { useState } from "react";
import { Checkbox } from "@material-ui/core";

const FormDados = ({ mudar, aoEnviar }) => {
  const [input, setInput] = useState("");
  const [number, setNumber] = useState("");
  const [radio, setRadio] = useState("");
  const [valueCheckBox, setValueCheckBox] = useState([]);

  function getRadio(date) {
    setRadio(date);
  }

  const getValue = (e) => {
    let data = valueCheckBox;

    data.push(e.target.value);

    setValueCheckBox(data);
  };

  return (
    <Form>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          aoEnviar({ input, number, radio, valueCheckBox });
        }}
      >
        <AccountCircleIcon style={{ fontSize: 40 }} />
        <Input
          id="outlined-basic"
          label="Nome"
          variant="outlined"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <Options>
          <RadioButton aoEnviar={getRadio} />
        </Options>

        <article>
          <p>Quantos meses de profissão:</p>
          <InputNumber
            id="outlined-basic"
            label="number"
            variant="standard"
            type="number"
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
        </article>

        <Button type="submit" primary>
          Cadastar
        </Button>
        <Texto>Quais tecnologias você domina?</Texto>
        <ContainerCheckBox>
          <Options>
            <div>
              <label>C++</label>
              <Checkbox value="cplusplus" onChange={(e) => getValue(e)} />
            </div>

            <div>
              <label>C#</label>
              <Checkbox value="csharp" onChange={(e) => getValue(e)} />
            </div>

            <div>
              <label>Java</label>
              <Checkbox value="java" onChange={(e) => getValue(e)} />
            </div>
          </Options>
          <Options>
            <div>
              <label>Python</label>
              <Checkbox value="python" onChange={(e) => getValue(e)} />
            </div>

            <div>
              <label>PHP</label>
              <Checkbox value="php" onChange={(e) => getValue(e)} />
            </div>

            <div>
              <label>Ruby</label>
              <Checkbox value="ruby" onChange={(e) => getValue(e)} />
            </div>
          </Options>
          <Options>
            <div>
              <label>Elang</label>
              <Checkbox value="elang" onChange={(e) => getValue(e)} />
            </div>

            <div>
              <label>SQL</label>
              <Checkbox value="sql" onChange={(e) => getValue(e)} />
            </div>

            <div>
              <label>Javascript</label>
              <Checkbox value="javascript" onChange={(e) => getValue(e)} />
            </div>
          </Options>
        </ContainerCheckBox>
      </form>
    </Form>
  );
};

export default FormDados;
