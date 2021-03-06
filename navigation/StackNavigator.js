import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import MedicineDetailScreen from "../screens/MedicineDetailScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { useSelector } from "react-redux";
import RegistrationScreen from "../screens/RegistrationScreen";
// import api from "../api";
// import upload from "../api/upload";

const RootStack = createNativeStackNavigator();

const StackNavigator = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const user = useSelector((state) => state.user);

  return (
    <RootStack.Navigator headerMode="none" initialRouteName="Login">
      {isLoggedIn && user && user?.data !== "" ? (
        <>
          <RootStack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false, headerLeft: () => null }}
          />
          <RootStack.Screen name="Profile" component={ProfileScreen} />
          <RootStack.Screen name="Content" component={ContentScreen} />
          <RootStack.Screen
            name="MedicineDetail"
            component={MedicineDetailScreen}
          />
        </>
      ) : (
        <>
          <RootStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="Register"
            component={RegistrationScreen}
            options={{ headerShown: false }}
          />
        </>
      )}
    </RootStack.Navigator>
  );
};

export default StackNavigator;
