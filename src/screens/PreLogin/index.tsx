import React from 'react'

import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'

import { StackTypes } from '../../routes/Login.routes'

import * as S from './styles'

export default () => {
  const backgroundImage = require('../../assets/imagens/background.png')
  const Logo = require('../../assets/imagens/logo.png')

  const navigation = useNavigation<StackTypes>()

  return (
    <S.Container source={backgroundImage}>
      <S.LogoContaier>
        <S.Logo source={Logo} />
        <S.Title>SISTEMA DE CONTROLE DE ACESSO</S.Title>
      </S.LogoContaier>

      <S.OptionsContainer>
        <S.OptionsTitle>ESCOLHA O TIPO DE CONTA</S.OptionsTitle>
        <S.MainButtonOptions>
          <Button
            title={'EFETIVO'}
            color={'rgb(88, 175, 203)'}
            onPress={() => navigation.navigate('login_efetivo')}
          />
        </S.MainButtonOptions>

        <S.Divider />

        <S.OptionsButtonContainer>
          <Button
            title={'VISITANTE'}
            color={'rgb(7, 140, 182)'}
            titleStyle={{ fontSize: 20 }}
            onPress={() => navigation.navigate('login_visitante')}
          />
          <Button
            title={'USUÁRIO'}
            color={'rgb(40, 82, 96)'}
            titleStyle={{ fontSize: 20 }}
            onPress={() => navigation.navigate('login_usuario')}
          />
        </S.OptionsButtonContainer>
      </S.OptionsContainer>
    </S.Container>
  )
}
