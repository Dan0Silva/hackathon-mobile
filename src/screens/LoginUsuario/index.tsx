import React, { useState, useContext, useEffect } from 'react'

import * as S from './styles'
import TextInput from '../../components/TextInput'
import Button from '../../components/Button'

import { AuthContext } from '../../context/Auth'
import { useNavigation } from '@react-navigation/native'
import { StackTypes } from '../../routes/Login.routes'
import Toast from 'react-native-toast-message'

interface UserType {
  usuario: string
  senha: string
}

const DefaultUser: UserType = {
  usuario: '',
  senha: '',
}

export default () => {
  const backgroundImage = require('../../assets/imagens/background.png')
  const Logo = require('../../assets/imagens/logo.png')

  const [user, setUser] = useState(DefaultUser)
  const [showPassoword, setShowPassword] = useState(true)
  const navigation = useNavigation<StackTypes>()

  const { signIn, auth } = useContext(AuthContext)

  const validateUser = () => {
    if (user.usuario == '' || user.senha == '') {
      Toast.show({
        type: 'error',
        text1: 'Login incompleto',
        text2: 'Favor verificar os campos',
      })
    } else {
      signIn(user.usuario, user.senha)
    }
  }

  const setPass = () => {
    setShowPassword(!showPassoword)
  }

  useEffect(() => {
    if (auth) {
      navigation.navigate('home_usuario')
    }
  }, [auth])

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
              <S.OptionsTitle>LOGIN USUÁRIO</S.OptionsTitle>
            </S.OptionsTitleContainer>

            <TextInput
              placeholder="Login"
              title={'Usuário'}
              value={user.usuario}
              onChangeText={(text) => setUser({ ...user, usuario: text })}
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
