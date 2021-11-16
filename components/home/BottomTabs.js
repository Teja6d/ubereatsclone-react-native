import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
//import {} from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
export default function BottomTabs() {
    return (
        <View style={{flexDirection:'row',
        margin:10,
        marginHorizontal:30,
        justifyContent:"space-between"}}>
            <Icons name="home" text = "Home"></Icons>
            <Icons name="search" text="Search"></Icons>
            <Icons name="shopping-bag" text="Cart"></Icons>
            <Icons name="receipt" text="Orders"></Icons>
            <Icons name="user" text="Account"></Icons>
        </View>
    );
};

const Icons = (props)=>(
    <TouchableOpacity>
    <View>
       
    <FontAwesome5
    name={props.name}
    size={20} 
    style={{
        marginBottom:3,
        alignSelf:'center',
    }}
    ></FontAwesome5>   
    <Text>{props.text}</Text>
   
    </View>
    </TouchableOpacity>
)
