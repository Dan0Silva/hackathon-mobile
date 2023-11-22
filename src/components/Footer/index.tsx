import React, { useContext } from 'react'
import { AuthContext } from '../../context/Auth'

import * as S from './styles'

export default () => {
  const { signOut } = useContext(AuthContext)

  return (
    <S.Container>
      <S.ButtonContainer
        onPress={() => {
          signOut()
        }}>
        <S.ExitIcon name={'door-open'} size={32} color={'white'} />
      </S.ButtonContainer>
    </S.Container>
  )
}
