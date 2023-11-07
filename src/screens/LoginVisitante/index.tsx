import React, { useState } from 'react'

import * as S from './styles'
import TextInput from '../../components/TextInput'
import Button from '../../components/Button'

import { useNavigation } from '@react-navigation/native'
import { StackTypes } from '../../routes/Login.routes'

const DefaultUser = {
  login: '',
  password: '',
}

export default () => {
  const backgroundImage = require('../../assets/imagens/background.png')
  const Logo = require('../../assets/imagens/logo.png')

  const [user, setUser] = useState(DefaultUser)
  const navigation = useNavigation<StackTypes>()

  return (
    <S.Container source={backgroundImage}>
      <S.AppContainer>
        <S.AppContainer2>
          <S.LogoContaier>
            <S.Logo source={Logo} />
            <S.Title>SISTEMA DE CONTROLE DE ACESSO</S.Title>
          </S.LogoContaier>

          <S.OptionsContainer>
            <S.OptionsTitleContainer>
              <S.OptionsTitle>
                LOGIN CONSULTA DE DADOS VISITANTES
              </S.OptionsTitle>
            </S.OptionsTitleContainer>

            <TextInput
              placeholder="Login"
              title={'Usuário'}
              value={user.login}
              onChangeText={(text) => setUser({ ...user, login: text })}
            />
            <TextInput
              placeholder="Senha"
              title={'Senha'}
              value={user.password}
              onChangeText={(text) => setUser({ ...user, password: text })}
            />

            <S.MainButtonOptions>
              <Button
                title={'ENTRAR'}
                color={'rgb(9, 127, 226)'}
                titleStyle={{ fontSize: 18 }}
                onPress={() => {
                  // enviar os dados
                  navigation.navigate('home_usuario')
                }}
              />
            </S.MainButtonOptions>
          </S.OptionsContainer>
        </S.AppContainer2>
      </S.AppContainer>
    </S.Container>
  )
}
