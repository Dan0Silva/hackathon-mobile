import styled from 'styled-components/native'
import { FontAwesome5 } from '@expo/vector-icons'

export const Container = styled.View`
  width: 100%;
  height: 60px;
  position: absolute;
  bottom: 0;
  flex-direction: row;
  align-items: center;
  padding-left: 26px;
  padding-right: 26px;
  padding-bottom: 4px;
  justify-content: space-between;
  background-color: rgba(23, 72, 88, 1);
`

export const Name = styled.Text`
  font-size: 20px;
  font-weight: 400;
  color: rgb(255, 255, 255);
`

export const ExitIcon = styled(FontAwesome5)``
