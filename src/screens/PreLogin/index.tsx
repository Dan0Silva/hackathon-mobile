import React from "react";

import Button from "../../components/Button";

import * as S from "./styles";

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
        <S.OptionsTitle>ESCOLHA O TIPO DE CONTA</S.OptionsTitle>
        <S.MainButtonOptions>
          <Button title={"EFETIVO"} color={"rgb(88, 175, 203)"} />
        </S.MainButtonOptions>

        <S.Divider />

        <S.OptionsButtonContainer>
          <Button title={"VISITANTE"} color={"rgb(7, 140, 182)"} />
          <Button title={"USUÁRIO"} color={"rgb(40, 82, 96)"} />
        </S.OptionsButtonContainer>
      </S.OptionsContainer>
    </S.Container>
  );
};
