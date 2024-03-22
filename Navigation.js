import react from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Icons
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

// Screens
import HomeScreen from "./Screens/HomeSceen";
import LocationSceen from "./Screens/LocationsScreen";
import PriceScreen from "./Screens/PriceScreen";

// Stack Navigator Locate -> Price
const LocateStackNavigator = createStackNavigator()

function MyStack() {
    return (
        <LocateStackNavigator.Navigator>
            <LocateStackNavigator.Screen
                name="Lugares"
                component={LocationSceen}
            />
            <LocateStackNavigator.Screen
                name="Precios"
                component={PriceScreen}
            />
        </LocateStackNavigator.Navigator>
    )
}

// Bottom tab Navigator
const Tab = createBottomTabNavigator();

function MyTabs() {
    return(
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{ 
                tabBarActiveTintColor: 'blue'
             }}
        >
            <Tab.Screen
                name="Home" 
                component={HomeScreen}
                options={{ 
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size}) => (
                        <MaterialCommunityIcons name="home-variant" size={size} color={color} />
                    ),
                    headerShown: false
                 }}
            />
            <Tab.Screen 
                name="Location" 
                component={MyStack}
                options={{ 
                    tabBarLabel: "Lugares",
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="enviroment" size={size} color={color} />
                    ),
                    headerShown: false
                 }}
            />
            {/* <Tab.Screen
                name="Precios"
                component={PriceScreen}
                options={{ 
                    tabBarLabel: "Precios",
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="price-tag" size={size} color={color} />
                    ),
                    headerShown:false
                 }}
            /> */}
            
        </Tab.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}