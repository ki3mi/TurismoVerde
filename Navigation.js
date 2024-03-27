import react from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Icons
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

// Screens
import HomeScreen from "./Screens/HomeSceen";
import LocationSceen from "./Screens/LocationsScreen";
import PriceScreen from "./Screens/PriceScreen";
import FoodScreen from "./Screens/FoodScreen";
import FoodDetail from "./Screens/FoodDetail";

// Stack Navigator Locate -> Price
const LocateStackNavigator = createStackNavigator()

// function MyStack() {
//     return (
//         <LocateStackNavigator.Navigator>
//             <LocateStackNavigator.Screen
//                 name="Comida"
//                 component={FoodScreen}
//             />
//             <LocateStackNavigator.Screen
//                 name="Detalles"
//                 component={FoodDetail}
//             />
//         </LocateStackNavigator.Navigator>
//     )
// }

// Bottom tab Navigator
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: 'green',
                headerStyle: {backgroundColor: 'white'}
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Inicio',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home-variant" size={size} color={color} />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Location"
                component={LocationSceen}
                options={{
                    tabBarLabel: "Lugares",
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="enviroment" size={size} color={color} />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Platos"
                component={FoodScreen}
                options={{
                    tabBarLabel: "Platos",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="fast-food" size={size} color={color} />
                    ),
                    headerShown: false
                }}
            />

        </Tab.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}