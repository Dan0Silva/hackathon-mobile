import React, { useContext } from 'react'

import { AuthContext } from '../../context/Auth'

import Header from '../../components/Header'
import * as S from './styles'
import Footer from '../../components/Footer'
import QRCode from 'react-qr-code'

export default () => {
  const { staff } = useContext(AuthContext)

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
              <S.Name>
                {staff.nome_completo
                  ? staff.nome_completo.toUpperCase()
                  : 'USER NAME'}
              </S.Name>
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

                <S.Option>
                  <S.Icon name={'font-awesome-flag'} size={18} color={'#000'} />
                  <S.OptionName>POSTO</S.OptionName>
                </S.Option>
              </S.OptionsContainer>

              <S.ContainerQRCode>
                <QRCode value={staff.qrcode_efetivo.toString()} size={200} />
              </S.ContainerQRCode>
            </S.IntContainer>
          </S.CardContainer>
        </S.ContainerMenu>
      </S.ContainerScrollView>

      <Footer name={'test'} />
    </S.Container>
  )
}
