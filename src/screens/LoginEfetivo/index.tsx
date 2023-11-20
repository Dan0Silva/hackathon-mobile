import React, { useState, useContext } from 'react'

import * as S from './styles'
import TextInput from '../../components/TextInput'
import Button from '../../components/Button'
import Toast from 'react-native-toast-message'

import { AuthContext } from '../../context/Auth'

const DefaultUser = {
  email: '',
  senha: '',
}

export default () => {
  const backgroundImage = require('../../assets/imagens/background.png')
  const Logo = require('../../assets/imagens/logo.png')

  const [user, setUser] = useState(DefaultUser)
  const [showPassoword, setShowPassword] = useState(true)

  const { signInEfetivo } = useContext(AuthContext)

  const validateUser = () => {
    if (user.email == '' || user.senha == '') {
      Toast.show({
        type: 'error',
        text1: 'Login incompleto',
        text2: 'Favor verificar os campos',
      })
    } else {
      signInEfetivo(user.email, user.senha)
    }
  }

  const setPass = () => {
    setShowPassword(!showPassoword)
  }

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
              <S.OptionsTitle>LOGIN CONSULTA DE DADOS EFETIVOS</S.OptionsTitle>
            </S.OptionsTitleContainer>

            <TextInput
              placeholder="Email"
              title={'Email'}
              value={user.email}
              onChangeText={(text) => setUser({ ...user, email: text })}
            />
            <TextInput
              placeholder="Senha"
              title={'Senha'}
              icon={'eye'}
              iconAction={setPass}
              secureTextEntry={showPassoword}
              value={user.senha}
              onChangeText={(text) => setUser({ ...user, senha: text })}
            />

            <S.MainButtonOptions>
              <Button
                title={'ENTRAR'}
                color={'rgb(9, 127, 226)'}
                titleStyle={{ fontSize: 18 }}
                onPress={validateUser}
              />
            </S.MainButtonOptions>
          </S.OptionsContainer>
        </S.AppContainer2>
      </S.AppContainer>
    </S.Container>
  )
}
