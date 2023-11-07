import React from 'react'

import * as S from './styles'

interface Props {
  name: string
}

export default (props: Props) => {
  const { name, ...restProps } = props

  return (
    <S.Container>
      <S.Name>{name}</S.Name>
      <S.ExitIcon name={'door-open'} size={32} color={'white'} />
    </S.Container>
  )
}
