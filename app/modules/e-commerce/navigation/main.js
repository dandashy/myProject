import { Icon, Text } from "@components";
import { BaseColor, BaseStyle, useTheme } from "@config";
import ECategory from "@screens/ECategory";
import ECart from "@screens/ECart";
import EShipping from "@screens/EShipping";
import EPayment from "@screens/EPayment";
import EConfirmed from "@screens/EConfirmed";
import EMyOrder from "@screens/EMyOrder";
import ETrackOrder from "@screens/ETrackOrder";
import EWishlist from "@screens/EWishlist";
import ENotification from "@screens/ENotification";
import EAddress from "@screens/EAddress";
import EBank from "@screens/EBank";
import EBankDetail from "@screens/EBankDetail";
import EMessages from "@screens/EMessages";
import EFollowers from "@screens/EFollowers";
import EProductPageNotFound from "@screens/EProductPageNotFound";
import EReviews from "@screens/EReviews";
import EFeedback from "@screens/EFeedback";
/* Bottom Screen */
import EHome from "@screens/EHome";
import EProduct from "@screens/EProduct";
import Profile from "@screens/Profile";
import Setting from "@screens/Setting";
import EProductDetail from "@screens/EProductDetail";

/* Setting */
import ProfileEdit from "@screens/ProfileEdit";
import ChangeLanguage from "@screens/ChangeLanguage";
import ContactUs from "@screens/ContactUs";
import AboutUs from "@screens/AboutUs";
import ThemeSetting from "@screens/ThemeSetting";
import ChangePassword from "@screens/ChangePassword";

/** Preview Component */
import PreviewComponent from "@screens/PreviewComponent";
import EProductStoreProfile from "@screens/EProductStoreProfile";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";

const MainStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const EBottomTabNavigator = (props) => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showIcon: true,
        showLabel: true,
        activeTintColor: colors.primaryColor,
        inactiveTintColor: BaseColor.grayColor,
        style: BaseStyle.tabBar,
        labelStyle: {
          fontSize: 12,
        },
      }}
    >
      <BottomTab.Screen
        name="EHome"
        component={EHome}
        options={{
          title: t("home"),
          tabBarIcon: ({ color }) => {
            return <Icon name="inbox" size={20} solid color={color} />;
          },
        }}
      />

      <BottomTab.Screen
        name="EProduct"
        component={EProduct}
        options={{
          title: t("products"),
          tabBarIcon: ({ color }) => {
            return <Icon name="th-large" size={20} solid color={color} />;
          },
        }}
      />

      <BottomTab.Screen
        name="News"
        component={ECategory}
        options={{
          title: t("news"),
          tabBarIcon: ({ color }) => {
            return <Icon name="book" size={20} solid color={color} />;
          },
        }}
      />

      <BottomTab.Screen
        name="ECart"
        component={ECart}
        options={{
          title: t("cart"),
          tabBarIcon: ({ color }) => {
            return (
              <View>
                <Icon
                  solid
                  name="shopping-cart"
                  size={20}
                  solid
                  color={color}
                />
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: BaseColor.whiteColor,
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    width: 20,
                    height: 20,
                    backgroundColor: "red",
                    top: -5,
                    right: -12,
                    borderRadius: 10,
                  }}
                >
                  <Text whiteColor caption2>
                    5
                  </Text>
                </View>
              </View>
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: t("account"),
          tabBarIcon: ({ color }) => {
            return <Icon solid name="user-circle" size={20} color={color} />;
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

const Main = (props) => {
  return (
    <MainStack.Navigator
      headerMode="none"
      initialRouteName="EBottomTabNavigator"
    >
      <MainStack.Screen
        name="EBottomTabNavigator"
        component={EBottomTabNavigator}
      />
      <MainStack.Screen name="Setting" component={Setting} />
      <MainStack.Screen name="EProductDetail" component={EProductDetail} />
      <MainStack.Screen name="EShipping" component={EShipping} />
      <MainStack.Screen name="EPayment" component={EPayment} />
      <MainStack.Screen name="EConfirmed" component={EConfirmed} />
      <MainStack.Screen name="EMyOrder" component={EMyOrder} />
      <MainStack.Screen name="ETrackOrder" component={ETrackOrder} />
      <MainStack.Screen name="EWishlist" component={EWishlist} />
      <MainStack.Screen name="ENotification" component={ENotification} />
      <MainStack.Screen name="EAddress" component={EAddress} />
      <MainStack.Screen name="EBank" component={EBank} />
      <MainStack.Screen name="EBankDetail" component={EBankDetail} />

      <MainStack.Screen name="ProfileEdit" component={ProfileEdit} />
      <MainStack.Screen name="ChangeLanguage" component={ChangeLanguage} />
      <MainStack.Screen name="ContactUs" component={ContactUs} />
      <MainStack.Screen name="AboutUs" component={AboutUs} />
      <MainStack.Screen name="PreviewComponent" component={PreviewComponent} />
      <MainStack.Screen name="ThemeSetting" component={ThemeSetting} />
      <MainStack.Screen name="ChangePassword" component={ChangePassword} />
      <MainStack.Screen name="ECategory" component={ECategory} />
      <MainStack.Screen
        name="EProductStoreProfile"
        component={EProductStoreProfile}
      />
      <MainStack.Screen name="EMessages" component={EMessages} />
      <MainStack.Screen name="EFollowers" component={EFollowers} />
      <MainStack.Screen
        name="EProductPageNotFound"
        component={EProductPageNotFound}
      />
      <MainStack.Screen name="EReviews" component={EReviews} />
      <MainStack.Screen name="EFeedback" component={EFeedback} />
    </MainStack.Navigator>
  );
};

export default Main;
