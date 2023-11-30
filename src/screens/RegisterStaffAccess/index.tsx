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
              <S.OptionsTitle>EFETIVO</S.OptionsTitle>
            </S.OptionsTitleContainer>

            <S.IntContainer>
              <S.Name>username</S.Name>
              <S.CodeUser>SARAM: </S.CodeUser>

              <S.Line />

              <S.TitleItem>CPF</S.TitleItem>
              <S.ValueItem>999.999.999-99</S.ValueItem>

              <S.TitleItem>UNIDADE</S.TitleItem>
              <S.ValueItem>cozinha da base</S.ValueItem>

              <S.TitleItem>POSTO OU GRADUAÇÃO</S.TitleItem>
              <S.ValueItem>nome do posto ou graduação</S.ValueItem>
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
