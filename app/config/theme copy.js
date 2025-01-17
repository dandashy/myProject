import { useSelector } from "react-redux";
import { useDarkMode } from "react-native-dark-mode";

/**
 * Define Const color use for whole application
 */
export const BaseColor = {
  grayColor: "#9B9B9B",
  dividerColor: "#BDBDBD",
  whiteColor: "#FFFFFF",
  fieldColor: "#F5F5F5",
  yellowColor: "#FDC60A",
  navyBlue: "#3C5A99",
  kashmir: "#5D6D7E",
  orangeColor: "#E5634D",
  blueColor: "#5DADE2",
  pinkColor: "#A569BD",
  greenColor: "#58D68D",
  mainBlue: "#2383c6",
  mainGreen: "#99ca3c",
  mainGrey: "#EDEDED",
};

/**
 * Define Const list theme use for whole application
 */
export const ThemeSupport = [
  {
    theme: "orange",
    light: {
      dark: false,
      colors: {
        primary: "#E5634D",
        primaryDark: "#C31C0D",
        primaryLight: "#FF8A65",
        accent: "#4A90A4",
        background: "white",
        card: "#F5F5F5",
        text: "#212121",
        border: "#c7c7cc",
      },
    },
    dark: {
      dark: true,
      colors: {
        primary: "#E5634D",
        primaryDark: "#C31C0D",
        primaryLight: "#FF8A65",
        accent: "#4A90A4",
        background: "#010101",
        card: "#121212",
        text: "#e5e5e7",
        border: "#272729",
      },
    },
  },
  {
    theme: "main",
    light: {
      dark: false,
      colors: {
        primary: "#2383c6",
        primaryDark: "#F90030",
        primaryLight: "#FF5E80",
        accent: "#4A90A4",
        background: "white",
        card: "#F5F5F5",
        text: "#212121",
        border: "#c7c7cc",
      },
    },
    dark: {
      dark: true,
      colors: {
        primary: "#2383c6",
        primaryDark: "#F90030",
        primaryLight: "#FF5E80",
        accent: "#4A90A4",
        background: "#010101",
        card: "#121212",
        text: "#e5e5e7",
        border: "#272729",
      },
    },
  },
  {
    theme: "blue",
    light: {
      dark: false,
      colors: {
        primary: "#5DADE2",
        primaryDark: "#1281ac",
        primaryLight: "#68c9ef",
        accent: "#FF8A65",
        background: "white",
        card: "#F5F5F5",
        text: "#212121",
        border: "#c7c7cc",
      },
    },
    dark: {
      dark: true,
      colors: {
        primary: "#5DADE2",
        primaryDark: "#1281ac",
        primaryLight: "#68c9ef",
        accent: "#FF8A65",
        background: "#010101",
        card: "#121212",
        text: "#e5e5e7",
        border: "#272729",
      },
    },
  },
  {
    theme: "green",
    light: {
      dark: false,
      colors: {
        // primary: "#58D68D",
        primary: "#99ca3c",
        primaryDark: "#388E3C",
        primaryLight: "#C8E6C9",
        accent: "#607D8B",
        background: "white",
        card: "#F5F5F5",
        text: "#212121",
        border: "#c7c7cc",
      },
    },
    dark: {
      dark: true,
      colors: {
        primary: "#58D68D",
        primaryDark: "#388E3C",
        primaryLight: "#C8E6C9",
        accent: "#607D8B",
        background: "#010101",
        card: "#121212",
        text: "#e5e5e7",
        border: "#272729",
      },
    },
  },
  {
    theme: "yellow",
    light: {
      dark: false,
      colors: {
        primary: "#FDC60A",
        primaryDark: "#FFA000",
        primaryLight: "#FFECB3",
        accent: "#795548",
        background: "white",
        card: "#F5F5F5",
        text: "#212121",
        border: "#c7c7cc",
      },
    },
    dark: {
      dark: true,
      colors: {
        primary: "#FDC60A",
        primaryDark: "#FFA000",
        primaryLight: "#FFECB3",
        accent: "#795548",
        background: "#010101",
        card: "#121212",
        text: "#e5e5e7",
        border: "#272729",
      },
    },
  },
];

/**
 *  * //v.i// colors for buttons
 * Define default theme use for whole application
 */
export const DefaultTheme = {
  theme: "main",
  light: {
    dark: false,
    colors: {
      primary: "#22a1e0",
      primaryDark: "#2281e0",
      primaryLight: "#22a1e0",
      accent: "#4A90A4",
      background: "white",
      card: "#F5F5F5",
      text: "#212121",
      border: "#c7c7cc",
    },
  },
  dark: {
    dark: true,
    colors: {
      primary: "#99ca3c",
      primaryDark: "#2281e0",
      primaryLight: "#22a1e0",
      accent: "#4A90A4",
      background: "#010101",
      card: "#121212",
      text: "#e5e5e7",
      border: "#272729",
    },
  },
};

/**
 * Define list font use for whole application
 */
export const FontSupport = ["ProximaNova", "Raleway", "Roboto", "Merriweather"];

/**
 * Define font default use for whole application
 */
export const DefaultFont = "ProximaNova";

/**
 * export theme and colors for application
 * @returns theme,colors
 */
export const useTheme = () => {
  const isDarkMode = useDarkMode();
  const forceDark = useSelector((state) => state.application.force_dark);
  const themeStorage = useSelector((state) => state.application.theme);
  const listTheme = ThemeSupport.filter((item) => item.theme == themeStorage);
  const theme = listTheme.length > 0 ? listTheme[0] : DefaultTheme;

  if (forceDark) {
    return { theme: theme.dark, colors: theme.dark.colors };
  }
  if (forceDark == false) {
    return { theme: theme.light, colors: theme.light.colors };
  }
  return isDarkMode
    ? { theme: theme.dark, colors: theme.dark.colors }
    : { theme: theme.light, colors: theme.light.colors };
};

/**
 * export font for application
 * @returns font
 */
export const useFont = () => {
  const font = useSelector((state) => state.application.font);
  return font ?? DefaultFont;
};
