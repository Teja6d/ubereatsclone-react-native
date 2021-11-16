 import React from 'react'
 import { View, Text, Image } from 'react-native';
 

 export default function About({route}) {

    const {name,image,price,reviews,rating,categories} = route.params;

    const formattedCategories = categories.map(category=> category.title).join(" • ");

    const description = `${formattedCategories} ${price ? " • " + price : " "} • 🎫 • ${rating} ⭐ (${reviews}+)` 

     return (

         <View>
            <RestaurantImage image ={image}></RestaurantImage>
            <RestaurantTitle title={name}></RestaurantTitle>
            <RestaurantDescription description={description}></RestaurantDescription>
         </View>
     )
 };

 const RestaurantImage = (props)=>(

    <Image source={{uri:props.image}} style={{width:'100%',height:180}}></Image>
 );

 const RestaurantTitle = (props)=>(
     <Text 
     style={{
         fontSize:24,
         fontWeight:'bold',
         marginTop:10, 
         marginHorizontal:15
     }}>{props.title}</Text>
 )

 const RestaurantDescription = (props)=>(
    <Text 
    style={{
        fontSize:15,
        fontWeight:'bold',
        marginTop:10, 
        marginHorizontal:15
    }}>{props.description}</Text>
)
 