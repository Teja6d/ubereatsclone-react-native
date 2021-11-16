import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function Headertab({activeTab,setActiveTab}) {
   // const [activeTab,setActiveTab] = useState("Delivery")
    return (
        <View style={{flexDirection:'row',alignSelf:'center'}}>
           <HeaderButton 
           text ="Delivery" 
           btncolor = "black" 
           btntext="white"
           activeTab={activeTab}
           setActiveTab={setActiveTab}>
           </HeaderButton>
           <HeaderButton 
           text="Pickup" 
           btncolor = "white" 
           btntext="black"
           activeTab={activeTab}
           setActiveTab={setActiveTab}>
           </HeaderButton>
        </View>
    )
}

const HeaderButton = (props) =>{

    return(
         <TouchableOpacity 
            style={{
            backgroundColor: props.activeTab === props.text ? "black":"white",
            alignItems:'center',
            justifyContent:'center',
            paddingVertical:6,
            paddingHorizontal:20,
            borderRadius:30}}
             onPress={()=>{
                 //console.log('clicked')
                props.setActiveTab(props.text)
            }}>
            <Text style={{
                color:props.activeTab === props.text ? "white":"black",
                fontSize:18,
                fontWeight:'bold'}}
                >
                {props.text}</Text> 
        </TouchableOpacity>
        
    );
} 
