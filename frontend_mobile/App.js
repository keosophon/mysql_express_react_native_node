import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import EmployeeList from "./components/EmployeeList";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EmployeeList">
        <Stack.Screen
          name="EmployeeList"
          component={EmployeeList}
          options={{ title: "Employee List" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
