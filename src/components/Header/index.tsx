import React from 'react'

import * as S from './styles'

export default () => {
  const Logo = require('../../assets/imagens/logo.png')

  return (
    <S.Container>
      <S.Logo source={Logo} />
    </S.Container>
  )
}
