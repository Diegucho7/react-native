import {View, Text, useColorScheme, Appearance} from 'react-native';
import ThemedView from "@/presentation/shared/ThemedView";
import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedSwitch from "@/presentation/shared/ThemedSwitch";
import {useState} from "react";
import setColorScheme = Appearance.setColorScheme;

const ThemesScreen = () => {

    const theme = useColorScheme();
    const [darkModeSettings, setDarkModeSettings] = useState({
        darkMode: theme === "dark",
        systemMode:false,
    });

    const setDarkMode = (value: boolean) => {
        setColorScheme(value ? 'dark' : 'light');
        setDarkModeSettings({
            darkMode:  value,
            systemMode:false
        })
    }

    const setSystemMode = (value: boolean) => {
        setDarkModeSettings({
            darkMode:  darkModeSettings.darkMode,
            systemMode: value
        })
    }

    return (
    <ThemedView>
      <ThemedCard className="mt-5">
          <ThemedSwitch
          text = "Dark Mode"
          className="mb-5"
          value = {darkModeSettings.darkMode}
          onValueChange={setDarkMode}
          >

          </ThemedSwitch>
          <ThemedSwitch
          text = "System Mode"
          className="mb-5"
          value = {darkModeSettings.systemMode}
          onValueChange={setSystemMode}
          >

          </ThemedSwitch>

      </ThemedCard>
    </ThemedView>
  );
};
export default ThemesScreen;
