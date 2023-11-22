import React, { useContext } from 'react'

import { AuthContext } from '../../context/Auth'

import Header from '../../components/Header'
import * as S from './styles'
import Footer from '../../components/Footer'
import QRCode from 'react-qr-code'

export default () => {
  const { visiter } = useContext(AuthContext)

  const dataOriginal = new Date(visiter.permissionDate)

  function formatarData(data: Date) {
    const dia = String(data.getDate()).padStart(2, '0')
    const mes = String(data.getMonth() + 1).padStart(2, '0') // Os meses são base 0, então adicionamos 1
    const ano = data.getFullYear()

    return `${dia}/${mes}/${ano}`
  }

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
                {visiter.nome.toUpperCase()
                  ? visiter.nome.toUpperCase()
                  : 'USER NAME'}
              </S.Name>
              <S.CodeUser>
                {visiter.num_doc ? visiter.num_doc : 'NUM DOC'}
              </S.CodeUser>

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
                <QRCode
                  value={visiter.qrcode_visitante.toString()}
                  size={200}
                />
              </S.ContainerQRCode>

              <S.Data>
                {visiter.permissionDate
                  ? formatarData(dataOriginal)
                  : 'DATA DE VENCIMENTO'}
              </S.Data>
            </S.IntContainer>
          </S.CardContainer>
        </S.ContainerMenu>
      </S.ContainerScrollView>

      <Footer name={'test'} />
    </S.Container>
  )
}
