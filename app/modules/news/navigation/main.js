import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon, Text } from "@components";
import * as Utils from "@utils";
import { store } from "app/store";

/* Bottom Screen */
import Home from "@screens/Home";
import Category from "@screens/Category";
import Profile from "@screens/Profile";
import Post from "@screens/Post";
import Favourite from "@screens/Favourite";

/* Modal Screen only affect iOS */
import Search from "@screens/Search";
import SignUp from "@screens/SignUp";

/* Stack Screen */
import Messenger from "@screens/Messenger";
import Review from "@screens/Review";
import Feedback from "@screens/Feedback";
import Messages from "@screens/Messages";
import Notification from "@screens/Notification";
import ResetPassword from "@screens/ResetPassword";
import ChangePassword from "@screens/ChangePassword";
import ProfileEdit from "@screens/ProfileEdit";
import ChangeLanguage from "@screens/ChangeLanguage";
import ContactUs from "@screens/ContactUs";
import AboutUs from "@screens/AboutUs";
import PostDetail from "@screens/PostDetail";
import Setting from "@screens/Setting";
import ThemeSetting from "@screens/ThemeSetting";

/** Preview Component */
import PreviewComponent from "@screens/PreviewComponent";
import { useSelector } from "react-redux";
import { BaseColor, useTheme, BaseStyle } from "@config";
import { useTranslation } from "react-i18next";
import { View } from "react-native";

const MainStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = (props) => {
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
                name="Home"
                component={Home}
                options={{
                    title: t("home"),
                    tabBarIcon: ({ color }) => {
                        return (
                            <Icon name="inbox" size={20} solid color={color} />
                        );
                    },
                }}
            />

            <BottomTab.Screen
                name="Category"
                component={Category}
                options={{
                    title: t("category"),
                    tabBarIcon: ({ color }) => {
                        return (
                            <Icon
                                name="th-large"
                                size={20}
                                solid
                                color={color}
                            />
                        );
                    },
                }}
            />
            <BottomTab.Screen
                name="Post"
                component={Post}
                options={{
                    title: t("posts"),
                    tabBarIcon: ({ color }) => {
                        return (
                            <Icon name="file" size={20} solid color={color} />
                        );
                    },
                }}
            />
            <BottomTab.Screen
                name="Favourite"
                component={Favourite}
                options={{
                    title: t("favorites"),
                    tabBarIcon: ({ color }) => {
                        return (
                            <View>
                                <Icon
                                    solid
                                    name="bookmark"
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
                        return (
                            <Icon
                                solid
                                name="user-circle"
                                size={20}
                                color={color}
                            />
                        );
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
            initialRouteName="BottomTabNavigator"
        >
            <MainStack.Screen
                name="BottomTabNavigator"
                component={BottomTabNavigator}
            />
            <MainStack.Screen name="Search" component={Search} />
            <MainStack.Screen name="SignUp" component={SignUp} />
            <MainStack.Screen name="Messenger" component={Messenger} />
            <MainStack.Screen name="Review" component={Review} />
            <MainStack.Screen name="Feedback" component={Feedback} />
            <MainStack.Screen name="Messages" component={Messages} />
            <MainStack.Screen name="Notification" component={Notification} />
            <MainStack.Screen name="ResetPassword" component={ResetPassword} />
            <MainStack.Screen
                name="ChangePassword"
                component={ChangePassword}
            />
            <MainStack.Screen name="ProfileEdit" component={ProfileEdit} />
            <MainStack.Screen
                name="ChangeLanguage"
                component={ChangeLanguage}
            />
            <MainStack.Screen name="ContactUs" component={ContactUs} />
            <MainStack.Screen name="AboutUs" component={AboutUs} />
            <MainStack.Screen name="PostDetail" component={PostDetail} />
            <MainStack.Screen
                name="PreviewComponent"
                component={PreviewComponent}
            />
            <MainStack.Screen name="Setting" component={Setting} />
            <MainStack.Screen name="ThemeSetting" component={ThemeSetting} />
        </MainStack.Navigator>
    );
};

export default Main;
