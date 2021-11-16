import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import BouncyCheckbox from 'react-native-bouncy-checkbox';
const foods = [ 
  {
    title: "Tandoori Chicken",
    description:
      "Tandoori Chicken - an iconic restaurant style smoky grilled chicken appetizer dish",
    price: "$13.0",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/53/Tandoori_chicken_laccha_piyaz1_%2836886283595%29.jpg",
  },
  {
    title: "Butter Chicken",
    description:
      "Tandoori Chicken - an iconic restaurant style smoky grilled chicken appetizer dish. Its authentic",
    price: "$13.50",
    image:
      "https://healthyfitnessmeals.com/wp-content/uploads/2021/09/Cajun-shrimp-8.jpg",
  },
  {
    title: "Masala Chicken",
    description:
      "Tandoori Chicken - an iconic restaurant style smoky grilled chicken appetizer dish. Its authentic, easy and the best" +
      "This is definitely going to become your one of the favourite chicken recipes this winter season.",
    price: "$13.50",
    image:
      "https://healthyfitnessmeals.com/wp-content/uploads/2020/01/Classic-beef-stew-3-720x720.jpg",
  },
  {
    title: "Indian Chicken",
    description:
      "Tandoori Chicken - an iconic restaurant style smoky grilled chicken appetizer dish. Its authentic, easy and the best" +
      "This is definitely going to become your one of the favourite chicken recipes this winter season.",
    price: "$13.50",
    image:
      "https://healthyfitnessmeals.com/wp-content/uploads/2020/10/MEXICAN-CHARRED-SWEETCORN-SOUP_-7.jpg",
  },
  {
    title: "Indian Chicken",
    description:
      "Tandoori Chicken - an iconic restaurant style smoky grilled chicken appetizer dish. Its authentic, easy and the best" +
      "This is definitely going to become your one of the favourite chicken recipes this winter season.",
    price: "$13.50",
    image:
      "https://healthyfitnessmeals.com/wp-content/uploads/2021/09/Garlic-shrimp-pasta-7.jpg",
  },
];


export default function MenuItem({restaurantName}) {
    const dispatch = useDispatch();

    const selectedItems = (item,checkboxValue)=>(

    dispatch({
        type:"ADD_TO_CART",
        payload:{...item,
          restaurantName:restaurantName,
          checkboxValue:checkboxValue},
    })
)
    const cartItems = useSelector((state)=>(
      state.cartReducer.selectedItems.items
    ));

    const isFoodInCart = (food,cartItems)=>(
      Boolean(cartItems.find((item)=>item.title == food.title))
    )
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuStyle}>
              <BouncyCheckbox 
              isChecked={isFoodInCart(food,cartItems)}
              onPress={(checkboxValue)=>selectedItems(food,checkboxValue)} 
              iconImageStyle={{borderColor:"lightgray",
              borderRadius:0}} fillColor="green"/>
            <FoodInfo food={food}></FoodInfo>
            <MenuImage image={food.image}></MenuImage>
          </View>
          <Divider width={0.5} orientation="vertical" style={{marginHorizontal:20}} ></Divider>
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: 200, justifyContent: "space-evenly" }}>
    <Text style={styles.textTitle}>{props.food.title}</Text>
    <Text style={styles.textDescription}>{props.food.description}</Text>
    <Text style={styles.textPrice}>{props.food.price}</Text>
  </View>
);

const MenuImage = (props) => (
  <View>
    <Image source={{ uri: props.image }} style={styles.menuImage}></Image>
  </View>
);

const styles = StyleSheet.create({
  menuStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin:20,
    //borderRadius: 10,
    //padding: 10,
    //backgroundColor:'#eee'
  },
  textTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  textDescription: {
    fontSize: 14,
    fontWeight: "900",
  },
  textPrice: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop:8,
    backgroundColor:'#eee',
    paddingHorizontal:2,
    borderRadius:5,
    alignSelf:"flex-start"
  },
  menuImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    resizeMode:'contain'
  },
});
