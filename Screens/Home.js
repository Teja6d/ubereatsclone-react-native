import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, StatusBar, ScrollView } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import BottomTabs from "../components/home/BottomTabs";
import Categories from "../components/home/Categories";
import Headertab from "../components/home/headertab";
import RestaurantItems, {
  localRestaurants,
} from "../components/home/RestaurantItem";
//import RestaurantItem from '../components/RestaurantItem'
import Searchbar from "../components/home/Searchbar";
//import { localRestaurants } from '../components/RestaurantItem'

export default function Home({navigation}) {
  const YELP_API_KEY =
    "E8FaDPLgl5zfdmm--ECyUoYl2tNOAHOA1ukagwuol6IpSWizmy0qOlFguILDi1K7ACahZH8HT1JY_uJG9QfYoT1BXVk-eM_YMHbcr3Vp-udnpqL5LtY30CAQXihnYXYx";

  const [restaurantData, setResturantData] = useState(localRestaurants);
  const [city, setCity] = useState("Hollywood");
  const [activeTab, setActiveTab] = useState("Delivery");
  const getRestaurantFromYelp = () => {
    const yelpurl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpurl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setResturantData(json.businesses.filter((resturant)=>resturant.transactions.includes(activeTab.toLowerCase()))))
        .catch(err=>err)
  };
  useEffect(() => {
    getRestaurantFromYelp();
  }, [city, activeTab]);
  return (
    <SafeAreaView
      style={{
        height: "100%",
        backgroundColor: "#eee",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
      navigation={navigation}
    >
      <View
        style={{
          backgroundColor: "white",
          padding: 10,
        }}
      >
        <Headertab activeTab={activeTab} setActiveTab={setActiveTab} />
        <Searchbar cityHandler={setCity}></Searchbar>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories></Categories>
        <RestaurantItems restaurantData={restaurantData}
         navigation={navigation}></RestaurantItems>
      </ScrollView>
      <Divider width={1}/>
      <BottomTabs></BottomTabs>
    </SafeAreaView>
  );
}
