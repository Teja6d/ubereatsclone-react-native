import React from 'react'
//import { ScrollView, View} from 'react-native'
import { Divider } from 'react-native-elements'
import { State } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import About from '../components/restaurantdetails/About'
import MenuItem from '../components/restaurantdetails/MenuItem'
import ViewCart from '../components/restaurantdetails/ViewCart'

export default function RestaurantDetails({route,navigation}) {
    
    return (
        <>
            <About route={route}></About>
            <Divider width={1.8} style={{marginVertical:20}}></Divider> 
            <MenuItem restaurantName ={route.params.name} ></MenuItem>
            <ViewCart navigation={navigation} restaurantName ={route.params.name}></ViewCart>
        </>
    )
}
 