import {
  DarkModeBody,
  DarkModeContainer,
  DarkModeTitle,
  DarkModeText,
  DarkModeForm,
  LightModeBody,
  LightModeContainer,
  LightModeTitle,
  LightModeText,
  LightModeForm,
} from "./variaveis";

export const lightMode = {
  body: LightModeBody,
  container: LightModeContainer,
  title: LightModeTitle,
  text: LightModeText,
  form: LightModeForm,
  filter: "",
};

export const darkMode = {
  body: DarkModeBody,
  container: DarkModeContainer,
  title: DarkModeTitle,
  text: DarkModeText,
  form: DarkModeForm,
  filter: "invert(100%)",
};
