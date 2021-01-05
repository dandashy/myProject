import Text from "@components/Text";
import PropTypes from "prop-types";
import React from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import styles from "./styles";

export default function ProfilePerformance(props) {
  const { t } = useTranslation();
  const renderValue = (type, value) => {
    switch (type) {
      case "primary":
        return (
          <Text title3 semibold primaryColor>
            {value}
          </Text>
        );
      case "small":
        return (
          <Text body1 semibold>
            {value}
          </Text>
        );
      default:
        return (
          <Text headline style={{ fontSize: 14 }} semibold>
            {value}
          </Text>
        );
    }
  };

  const renderTitle = (type, value) => {
    switch (type) {
      case "primary":
        return (
          <Text body2 grayColor>
            {t(value)}
          </Text>
        );
      case "small":
        return (
          <Text caption1 grayColor>
            {t(value)}
          </Text>
        );
      default:
        return (
          <Text body2 grayColor>
            {t(value)}
          </Text>
        );
    }
  };

  const {
    style,
    contentLeft,
    contentCenter,
    contentRight,
    data,
    type,
    flexDirection,
  } = props;

  switch (flexDirection) {
    case "row":
      return (
        <View style={[styles.contain, style]}>
          {/* {data.map((item, index) => {
            if (index == 0) {
              return (
                <View style={[styles.contentLeft, contentLeft]} key={index}>
                  {renderValue(type, item.value)}
                  {renderTitle(type, item.title)}
                </View>
              );
            } else if (index == data.length - 1) {
              return (
                <View style={[styles.contentRight, contentRight]} key={index}>
                  {renderValue(type, item.value)}
                  {renderTitle(type, item.title)}
                </View>
              );
            } else {
              return (
                <View style={[styles.contentCenter, contentCenter]} key={index}>
                  {renderValue(type, item.value)}
                  {renderTitle(type, item.title)}
                </View>
              );
            }
          })} */}
          <View style={[styles.contentCenter, contentCenter]}>
            {renderValue(type, "Orders NB")}
            {renderTitle(type, 23)}
          </View>
          <View style={[styles.contentCenter, contentCenter]}>
            {renderValue(type, "Following NB")}
            {renderTitle(type, 27)}
          </View>
        </View>
      );
    case "column":
      return (
        <View style={[{ justifyContent: "space-between", flex: 1 }, style]}>
          {data.map((item, index) => (
            <View style={styles.itemInfor} key={index}>
              {renderTitle(type, item.title)}
              {renderValue(type, item.value)}
            </View>
          ))}
        </View>
      );
  }
}

ProfilePerformance.propTypes = {
  flexDirection: PropTypes.string,
  type: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  data: PropTypes.array,
  contentLeft: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  contentCenter: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  contentRight: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

ProfilePerformance.defaultProps = {
  flexDirection: "row",
  type: "medium",
  style: {},
  data: [],
  contentLeft: {},
  contentCenter: {},
  contentRight: {},
};
