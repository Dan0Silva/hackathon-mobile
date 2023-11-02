import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import PreLogin from "../screens/PreLogin";
import Login from "../screens/Login";

const Stack = createNativeStackNavigator();

type StackNavigation = {
  login: undefined;
  loginConfirmation: undefined;
  home: undefined;
  createAccount: undefined;
  userCreationSuccess: undefined;
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="login"
    >
      <Stack.Screen name={"pre_login"} component={PreLogin} />
      <Stack.Screen name={"login"} component={Login} />
    </Stack.Navigator>
  );
};
