import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RestaurantsStack from "../navigations/RestaurantsStack";
import AccountStack from "../navigations/AccountStack";
import FavoritesStack from "../navigations/FavoritesStack";
import SearchStack from "../navigations/SearchStack";
import TopRestaurantsStack from "../navigations/TopRestaurantsStack";
import { Icon } from "react-native-elements";

// import Restaurants from "../screens/Restaurants";
// import Account from "../screens/Account";
// import Favorites from "../screens/Favorites";
// import Search from "../screens/Search";
// import TopRestaurants from "../screens/TopRestaurants";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Restaurantes"
        tabBarOptions={{
          inactiveTintColor: "#646464",
          activeTintColor: "#00a680",
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
        })}
      >
        <Tab.Screen
          name="restaurants"
          component={RestaurantsStack}
          options={{ title: "Restaurantes" }}
        />
        <Tab.Screen
          name="account"
          component={AccountStack}
          options={{ title: "Cuenta" }}
        />
        <Tab.Screen
          name="favorites"
          component={FavoritesStack}
          options={{ title: "Favoritos" }}
        />
        <Tab.Screen
          name="search"
          component={SearchStack}
          options={{ title: "Buscar" }}
        />
        <Tab.Screen
          name="top-restaurants"
          component={TopRestaurantsStack}
          options={{ title: "Top 5" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function screenOptions(route, color) {
  let iconName;

  switch (route.name) {
    case "restaurants":
      iconName = "compass-outline";
      break;
    case "account":
      iconName = "home-outline";
      break;
    case "favorites":
      iconName = "heart-outline";
      break;
    case "search":
      iconName = "magnify";
      break;
    case "top-restaurants":
      iconName = "start-outline";
      break;
    default:
      break;
  }

  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
}
