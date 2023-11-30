import React, { useContext } from 'react'
import { AuthContext } from '../../context/Auth'

import * as S from './styles'
import { useNavigation } from '@react-navigation/native'
import { StackTypesAuth } from '../../routes/MainRoutes/Main.routes'
import { ViewProps } from 'react-native'

interface Props extends ViewProps {
  renderGoBackButton?: boolean
}

export default (props: Props) => {
  const { signOut } = useContext(AuthContext)
  const navigation = useNavigation<StackTypesAuth>()

  const { renderGoBackButton = true } = props

  const renderBackButton = () => {
    if (renderGoBackButton) {
      return (
        <S.ButtonContainer
          style={{ marginRight: 'auto' }}
          onPress={() => {
            navigation.goBack()
          }}>
          <S.ExitIcon name={'arrow-left'} size={32} color={'white'} />
        </S.ButtonContainer>
      )
    }
  }

  return (
    <S.Container>
      {renderBackButton()}

      <S.ButtonContainer
        onPress={() => {
          signOut()
        }}>
        <S.ExitIcon name={'door-open'} size={32} color={'white'} />
      </S.ButtonContainer>
    </S.Container>
  )
}
