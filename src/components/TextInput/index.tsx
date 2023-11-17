import React from 'react'

import * as S from './styles'
import { TextInputProps } from 'react-native'

interface Props extends TextInputProps {
  placeholder: string
  title: string
  icon?: string
  iconAction?: Function
}

export default (props: Props) => {
  const { placeholder, title, icon, iconAction, ...restProps } = props

  return (
    <S.Container>
      {icon ? (
        <>
          <S.Title>{title}</S.Title>

          <S.InputContainer>
            <S.Input
              style={{ width: '90%' }}
              cursorColor={'rgb(112, 112, 112)'}
              placeholder={placeholder}
              {...restProps}
            />
            <S.ButtonIcon
              onPress={() => {
                iconAction ? iconAction() : () => {}
              }}>
              <S.Icon name={icon} size={20} color={'#000'} />
            </S.ButtonIcon>
          </S.InputContainer>
        </>
      ) : (
        <>
          <S.Title>{title}</S.Title>

          <S.InputContainer>
            <S.Input
              cursorColor={'rgb(112, 112, 112)'}
              placeholder={placeholder}
              {...restProps}
            />
          </S.InputContainer>
        </>
      )}
    </S.Container>
  )
}
