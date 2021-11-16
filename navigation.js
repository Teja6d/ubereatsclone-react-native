import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./Screens/Home";
import RestaurantDetails from "./Screens/RestaurantDetails";
import { Provider as ReduxProvider} from 'react-redux'
import store from './redux/store';
import configureStore from "./redux/store"


export default function RootNavigation(){
    const Stack = createStackNavigator();

    const store = configureStore();

    const screenOptions = {
        headerShown:false
    };
 
    return(
        <ReduxProvider store ={store}>
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={screenOptions}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="RestaurantDetails" component={RestaurantDetails}/>
            </Stack.Navigator>
        </NavigationContainer>
        </ReduxProvider>
    );
}