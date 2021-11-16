import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Categories() {
  const items = [
    {
      image: require("../../assets/images/shopping-bag.png"),
      text: "Pick-up",
    },
    {
      image: require("../../assets/images/soft-drink.png"),
      text: "Soft Drinks",
    },
    {
      image: require("../../assets/images/bread.png"),
      text: "Bakery Items",
    },
    {
      image: require("../../assets/images/fast-food.png"),
      text: "Fast Foods",
    },
    {
      image: require("../../assets/images/deals.png"),
      text: "Deals",
    },
    {
      image: require("../../assets/images/coffee.png"),
      text: "Coffee & Tea",
    },
    {
      image: require("../../assets/images/desserts.png"),
      text: "Dessert",
    },
  ];

  return (
    <View 
    style={{
        marginTop:5,
        backgroundColor:'white',
        paddingVertical:10,
        paddingLeft:15
    }}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {items.map((item, index) => (
        <TouchableOpacity key={index}>
        <View  style={{ alignItems: "center", marginRight: 20 }}>
          <Image
            source={item.image}
            style={{
              width: 50,
              height: 40,
              resizeMode: "contain",
              borderRadius: 5,
             // backgroundColor: "white",
            }}
          ></Image>
          <Text
            style={{ fontWeight: "bold", fontSize: 12, textAlign: "center" }}
          >
            {item.text}
          </Text>
        </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
    </View>
  );
}
