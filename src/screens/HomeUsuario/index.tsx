import React from 'react'

import Header from '../../components/Header'
import UserButton from '../../components/UserButton'

import * as S from './styles'
import Footer from '../../components/Footer'

export default () => {
  return (
    <S.Container>
      <Header />

      <S.Title>SISTEMA DE CONTROLE DE ACESSO</S.Title>

      <S.OptionsContainer>
        <S.OptionsRows>
          <UserButton
            icon={'user-alt'}
            text={'VALIDAÇÃO QR CODE'}
            style={{ backgroundColor: 'rgba(88, 175, 203, 1)' }}
          />
          <UserButton
            icon={'address-card'}
            text={'CRACHÁS VISITANTES'}
            style={{ backgroundColor: 'rgba(7, 140, 182, 1)' }}
          />
        </S.OptionsRows>
        <S.OptionsRows>
          <UserButton
            icon={'file-alt'}
            text={'RELATÓRIO EFETIVO'}
            style={{ backgroundColor: 'rgba(4, 97, 126, 1)' }}
          />
          <UserButton
            icon={'car'}
            text={'RELATÓRIO VEÍCULO'}
            style={{ backgroundColor: 'rgba(40, 82, 96, 1)' }}
          />
        </S.OptionsRows>
      </S.OptionsContainer>

      <S.Description>Número de indivíduos presentes</S.Description>

      <S.NumberContainer>
        <S.NumberCard style={{ backgroundColor: 'rgb(59, 88, 146)' }}>
          <S.IconNumber name={'running'} size={42} color={'white'} />
          <S.TextNumber>120</S.TextNumber>
        </S.NumberCard>
        <S.NumberCard style={{ backgroundColor: 'rgb(0, 40, 118)' }}>
          <S.IconNumber name={'car'} size={42} color={'white'} />
          <S.TextNumber>120</S.TextNumber>
        </S.NumberCard>
      </S.NumberContainer>

      <Footer name={'test'} />
    </S.Container>
  )
}
