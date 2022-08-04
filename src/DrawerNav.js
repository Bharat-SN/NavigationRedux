import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SavedVideos from './screens/SavedVideos';
import LikedVideos from './screens/LikedVideos';
import CustomDrawer from './Customdrawer';
import Tab from './Tab';

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props}/>}
        initialRouteName="Home"
        screenOptions={{
            drawerActiveBackgroundColor: "#7F5283",
            drawerActiveTintColor: "#fff",
            drawerInactiveTintColor: "#1F4690"
            }}>
            <Drawer.Screen name='Home' component={Tab} />
            <Drawer.Screen name='SavedVideos' component={SavedVideos} />
            <Drawer.Screen name='LikedVideos' component={LikedVideos} />
        </Drawer.Navigator>
    )
}

//drawerLabelStyle:{marginLeft: -25}