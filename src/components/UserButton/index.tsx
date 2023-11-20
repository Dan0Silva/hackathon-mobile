import React from 'react'

import * as S from './styles'
import { TouchableOpacityProps } from 'react-native'

interface Props extends TouchableOpacityProps {
  text: string
  icon: string
}

export default (props: Props) => {
  const { text, icon, ...restProps } = props

  return (
    <S.Container {...restProps}>
      <S.Icon name={icon} size={38} color={'white'} />
      <S.Title>{text}</S.Title>
    </S.Container>
  )
}
