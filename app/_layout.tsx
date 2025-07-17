import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

// Mencegah splash screen hilang secara otomatis sebelum font dimuat
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({

    // 5 FONT STATIS
    LatoRegular: require('../assets/fonts/font_statis/Lato/Lato-Regular.ttf'),
    MerriweatherBold: require('../assets/fonts/font_statis/Merriweather/Merriweather-Italic-VariableFont_opsz,wdth,wght.ttf'),
    OpenSansRegular: require('../assets/fonts/font_statis/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf'),
    PoppinsBold: require('../assets/fonts/font_statis/Poppins/Poppins-Bold.ttf'),
    RobotoMedium: require('../assets/fonts/font_statis/Roboto/Roboto-VariableFont_wdth,wght.ttf'),

    // 5 FONT VARIABEL
    MulishVariable: require('../assets/fonts/font_variabel/Mulish/Mulish-VariableFont_wght.ttf'),
    NunitoSansVariable: require('../assets/fonts/font_variabel/Nunito_Sans/NunitoSans-VariableFont_YTLC,opsz,wdth,wght.ttf'),
    OswaldVariable: require('../assets/fonts/font_variabel/Oswald/Oswald-VariableFont_wght.ttf'),
    RubikVariable: require('../assets/fonts/font_variabel/Rubik/Rubik-VariableFont_wght.ttf'),
    WorkSansVariable: require('../assets/fonts/font_variabel/Work_Sans/WorkSans-VariableFont_wght.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return <Stack />;
}
