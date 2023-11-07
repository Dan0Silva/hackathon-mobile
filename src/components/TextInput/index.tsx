import React from 'react'

import * as S from './styles'
import { TextInputProps } from 'react-native'

interface Props extends TextInputProps {
  placeholder: string
  title: string
}

export default (props: Props) => {
  const { placeholder, title, ...restProps } = props

  return (
    <S.Container>
      <S.Title>{title}</S.Title>

      <S.InputContainer>
        <S.Input
          cursorColor={'rgb(112, 112, 112)'}
          placeholder={placeholder}
          {...restProps}
        />
      </S.InputContainer>
    </S.Container>
  )
}
