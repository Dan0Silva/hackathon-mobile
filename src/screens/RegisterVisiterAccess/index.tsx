import React, { useContext } from 'react'

import { AuthContext } from '../../context/Auth'

import Header from '../../components/Header'
import * as S from './styles'
import Footer from '../../components/Footer'
import Button from '../../components/Button'

type UserAction = 'getIn' | 'getOut'

export default () => {
  const {} = useContext(AuthContext)

  const handleUserAction = (action: UserAction) => {
    try {
      if (action === 'getIn') {
        //realizar entrada do efetivo
        console.warn('entrada')
      } else if (action === 'getOut') {
        //realizar saida do efetivo
        console.warn('saida')
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <S.Container>
      <Header />

      <S.ContainerScrollView>
        <S.ContainerMenu>
          <S.IconContainer>
            <S.Icon name={'user-alt'} size={80} color={'#000'} />
          </S.IconContainer>

          <S.CardContainer>
            <S.OptionsTitleContainer>
              <S.OptionsTitle>VISITANTE</S.OptionsTitle>
            </S.OptionsTitleContainer>

            <S.IntContainer>
              <S.Name style={{ marginBottom: 10 }}>username</S.Name>
              {/* <S.CodeUser>SARAM: </S.CodeUser> */}

              <S.Line />

              <S.TitleItem>CPF</S.TitleItem>
              <S.ValueItem>999.999.999-99</S.ValueItem>

              <S.TitleItem>NIVEL DE ACESSO</S.TitleItem>
              <S.ValueItem>1</S.ValueItem>

              <S.TitleItem>DATA DE VALIDADE</S.TitleItem>
              <S.ValueItem>99/99/9999</S.ValueItem>
            </S.IntContainer>
          </S.CardContainer>

          <S.ContainerButton>
            <Button
              title={'Registrar Entrada'}
              color="rgb(7,187,25)"
              titleStyle={{ color: 'white', fontWeight: '400', fontSize: 20 }}
              style={{ paddingHorizontal: 20, height: 60 }}
              onPress={() => {
                handleUserAction('getIn')
              }}
            />
            <Button
              title={'Registrar Saida'}
              color="rgb(229,8,8)"
              titleStyle={{ color: 'white', fontWeight: '400', fontSize: 20 }}
              style={{ paddingHorizontal: 20, height: 60 }}
              onPress={() => {
                handleUserAction('getOut')
              }}
            />
          </S.ContainerButton>
        </S.ContainerMenu>
      </S.ContainerScrollView>

      <Footer />
    </S.Container>
  )
}
