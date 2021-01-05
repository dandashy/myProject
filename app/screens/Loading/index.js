import { Image, Text } from "@components";
import { BaseColor, useTheme } from "@config";
import { Images } from "@config";
import React, { useEffect } from "react";
import {
  ActivityIndicator,
  View,
  ImageBackground,
  StatusBar,
} from "react-native";
import styles from "./styles";
import { useTranslation } from "react-i18next";

const Loading = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const { colors } = useTheme();

  const onProcess = () => {
    setTimeout(() => {
      navigation.replace("Main");
    }, 1500);
  };
  useEffect(() => {
    onProcess();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#2383c6" />
      <ImageBackground
        source={require("../../assets/images/splashScreen/splashscreen.jpg")}
        style={styles.background}
      >
        <Image
          source={require("../../assets/images/splashScreen/logo.png")}
          style={styles.logo}
        />
      </ImageBackground>
    </View>
  );
};

export default Loading;
