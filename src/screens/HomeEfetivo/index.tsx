import React from 'react'

import Header from '../../components/Header'
import * as S from './styles'
import Footer from '../../components/Footer'
import QRCode from 'react-qr-code'

export default () => {
  return (
    <S.Container>
      <Header />

      <S.ContainerScrollView>
        <S.ContainerMenu>
          <S.IconContainer>
            <S.Icon name={'user-alt'} size={90} color={'#000'} />
          </S.IconContainer>

          <S.CardContainer>
            <S.OptionsTitleContainer>
              <S.OptionsTitle>SISTEMA DE CONTROLE DE ACESSO</S.OptionsTitle>
            </S.OptionsTitleContainer>

            <S.IntContainer>
              <S.Name>USER NAME</S.Name>
              <S.CodeUser>CPF OU SARAM</S.CodeUser>

              <S.OptionsContainer>
                <S.Option>
                  <S.Icon name={'car'} size={18} color={'#000'} />
                  <S.OptionName>VEÍCULOS</S.OptionName>
                </S.Option>

                <S.Option>
                  <S.Icon name={'key'} size={18} color={'#000'} />
                  <S.OptionName>NÍVEL DE ACESSO</S.OptionName>
                </S.Option>
              </S.OptionsContainer>

              <S.ContainerQRCode>
                <QRCode value="tests" size={200} />
              </S.ContainerQRCode>

              <S.Data>DATA DE VENCIMENTO</S.Data>
            </S.IntContainer>
          </S.CardContainer>
        </S.ContainerMenu>
      </S.ContainerScrollView>

      <Footer name={'test'} />
    </S.Container>
  )
}
