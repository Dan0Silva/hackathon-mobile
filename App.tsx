import React from "react";
import { StatusBar } from "expo-status-bar";
import Toast from "react-native-toast-message";
import Routes from "./src/routes";

export default function App() {
  return (
    <>
      <Routes />
      <Toast topOffset={56} />
      <StatusBar hidden={false} />
    </>
  );
}
