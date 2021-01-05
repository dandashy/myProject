import Text from "@components/Text";
import Image from "@components/Image";
import PropTypes from "prop-types";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { BaseColor, Images, useTheme } from "@config";

const Offer = ({ title, style, image }) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity style={[style, styles.container]}>
      <View style={{ paddingVertical: 3, alignItems: "center" }}>
        <Image source={image} style={styles.image} />
        <View style={styles.discountContainer}>
          <Text numberOfLines={1} bold style={styles.discount}>
            -20%
          </Text>
        </View>
      </View>
      <View style={styles.textBackground}>
        <Text numberOfLines={2} bold style={styles.text}>
          Tools & Home improvment
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Offer;
