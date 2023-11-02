import styled from "styled-components/native";

export const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
  height: 100%;
`;

export const LogoContaier = styled.View`
  width: 100%;
  align-items: center;
  padding: 33px;
  margin-top: 60px;
`;

export const Logo = styled.Image`
  width: 182px;
  margin: 20px;
  height: 138px;
`;

export const Title = styled.Text`
  font-size: 25px;
  text-align: center;
  font-weight: 700;
  color: rgb(255, 255, 255);
`;

export const OptionsContainer = styled.View`
  width: 300px;
  height: 300px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  align-items: center;
`;

export const OptionsTitle = styled.Text`
  font-size: 20px;
  margin-top: 16px;
  margin-bottom: 50px;
  text-align: center;
  font-weight: 600;
  color: rgb(9, 9, 9);
`;

export const MainButtonOptions = styled.View`
  width: 100%;
  flex-direction: row;
  flex: 1;
  align-items: center;
`;

export const Divider = styled.View`
  height: 1px;
  margin-top: 25px;
  margin-bottom: 35px;
  width: 90%;
  background-color: rgb(155, 155, 155);
`;

export const OptionsButtonContainer = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
`;
