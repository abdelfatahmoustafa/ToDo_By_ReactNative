import AddItems from "../screens/AddItems";
import Details from "../screens/Details";
import HomePage from "../screens/HomePage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PATHS } from "./Router";

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: "#1e3a8a" },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{
          headerShown: true,
          headerTitleAlign: "left",
          headerTitle: "Tasks",

          headerTitleStyle: {
            fontSize: 18,
          },
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerShown: true,
          headerBackVisible: true,
          headerBackTitle: "Back",
        }}
      />
      <Stack.Screen
        name={PATHS.ADD_TODO}
        component={AddItems}
        options={{
          headerShown: true,

          headerBackVisible: true,
          headerBackTitle: "Back",
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
