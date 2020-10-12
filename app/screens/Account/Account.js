import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import * as firebase from "firebase";
import UserGuest from "../Account/UserGuest";
import UserLogged from "../Account/UserLogged";

export default function Account() {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);

  return (
    <View>
      <Text>Acoount...</Text>
    </View>
  );
}
