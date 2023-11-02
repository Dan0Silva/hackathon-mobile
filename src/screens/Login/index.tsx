import React from "react";

import Button from "../../components/Button";

import * as S from "./styles";
import TextInput from "../../components/TextInput";

export default () => {
  const backgroundImage = require("../../assets/imagens/background.png");
  const Logo = require("../../assets/imagens/logo.png");

  return (
    <S.Container source={backgroundImage}>
      <S.LogoContaier>
        <S.Logo source={Logo} />
        <S.Title>SISTEMA DE CONTROLE DE ACESSO</S.Title>
      </S.LogoContaier>

      <S.OptionsContainer>
        <S.OptionsTitleContainer>
          <S.OptionsTitle>LOGIN USUÁRIO</S.OptionsTitle>
        </S.OptionsTitleContainer>

        <TextInput />
      </S.OptionsContainer>
    </S.Container>
  );
};
