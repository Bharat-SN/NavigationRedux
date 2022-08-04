import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNav from "./DrawerNav";

const Stack = createStackNavigator();

export default function StackNav() {
    return (
        <Stack.Navigator initialRouteName="Drawer">
            <Stack.Screen
                options={{ headerShown: false }}
                name="Drawer"
                component={DrawerNav}
            />
        </Stack.Navigator>
    )

}