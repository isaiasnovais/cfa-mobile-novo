import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, Roboto_900Black, useFonts } from "@expo-google-fonts/roboto";

import { NativeBaseProvider, StatusBar } from "native-base";

import { Loading } from "@components/Loading";
import { Routes } from "@routes/index";
import { THEME } from "@styles/theme";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, Roboto_900Black });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  );
}