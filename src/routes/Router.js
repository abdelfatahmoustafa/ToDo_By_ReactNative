import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Text } from "react-native";

import StackNavigator from "./StackNavigator";
import Details from "../screens/Details";

const Tabs = createBottomTabNavigator();
export const PATHS = {
  HOME: "Tasks",
  ADD_TODO: "Add You Task ",
  Details: "Details",
};
const Router = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{ tabBarStyle: { backgroundColor: "#1e3a8a" } }}
      >
        <Tabs.Screen
          name={PATHS.HOME}
          component={StackNavigator}
          options={{
            tabBarLabel: ({ focused, color }) => (
              <Text
                style={{
                  color: focused ? "red" : "gray",
                  display: focused ? "none" : "flex",
                  fontSize: 12,
                  lineHeight: 12,
                }}
              >
                Home
              </Text>
            ),
            headerShown: false,
            tabBarIcon: ({ focused, color }) => {
              return (
                <AntDesign
                  name="home"
                  size={24}
                  color={focused ? "white" : color}
                />
              );
            },
          }}
        />
        <Tabs.Screen name={PATHS.Details} component={Details} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default Router;
