// import { StatusBar } from "expo-status-bar";
import React from "react";
import Navigation from "./app/navigations/Navigation";
import { firebaseApp } from "./app/utils/firebase";
// import * as firebase from "firebase";

// import { StyleSheet, Text, View } from "react-native";

export default function App() {
  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     console.log(user);
  //   });
  // }, []);
  return <Navigation />;

  //(
  // <View style={styles.container}>
  //   <Text>Hola fany, tus nalgitas son mias!</Text>
  //   <StatusBar style="auto" />
  // </View>
  //);
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
