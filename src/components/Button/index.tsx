import React from "react";
import { TextStyle, TouchableOpacityProps } from "react-native";

import * as S from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  color: string;
  titleStyle?: TextStyle;
}

export default (props: ButtonProps) => {
  const { title, style, titleStyle, color, ...restProps } = props;

  return (
    <S.Container {...restProps} style={[{ backgroundColor: color }, style]}>
      <S.Title style={titleStyle}>{title}</S.Title>
    </S.Container>
  );
};
