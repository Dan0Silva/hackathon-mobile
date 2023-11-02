import { NavigationContainer } from "@react-navigation/native";

import LoginRoutes from "./Login.routes";

export default () => {
  return (
    <NavigationContainer>
      <LoginRoutes />
    </NavigationContainer>
  );
};
