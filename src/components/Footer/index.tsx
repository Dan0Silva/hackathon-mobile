import React, { useContext } from 'react'
import { AuthContext } from '../../context/Auth'

import * as S from './styles'

interface Props {
  name: string
}

export default (props: Props) => {
  const { name, ...restProps } = props

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
