import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        paddingVertical: 50,
      }}
    >
      <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "black",
        width: "80%",
        borderRadius: 10,
        padding: 40,

      }}>
      <Text
        style={{
          fontFamily: "poppins",
          fontWeight: "bold",
          fontSize: 20,
          color: "white",
        }}
        >
        Ali Sulton s Palilati
      </Text>
      </View>

      <TouchableOpacity style={{
        position: "absolute",
        top: 30,
        left: 30,}}>
      <AntDesign name="rightcircle" size={34} color="blue" />
      </TouchableOpacity>
    </View>
  );
}