import React from "react";
import { View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f0f0f0",
        paddingVertical: 50,
        paddingHorizontal: 20,
      }}
    >
      {/* Row 1 */}
      <View style={{
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 40,
      }}>
        <FontAwesome name="search" size={34} color="black" />
        <AntDesign name="heart" size={34} color="red" />
      </View>

      {/* Row 2 */}
      <View style={{
        flexDirection: "row", 
        justifyContent: "space-around",
        marginBottom: 40,
      }}>
        <Ionicons name="home" size={34} color="green" />
        <MaterialIcons name="favorite" size={34} color="pink" />
      </View>

      {/* Row 3 */}
      <View style={{
        flexDirection: "row",
        justifyContent: "space-around", 
        marginBottom: 40,
      }}>
        <Feather name="user" size={34} color="purple" />
        <AntDesign name="star" size={34} color="orange" />
      </View>

      {/* Row 4 */}
      <View style={{
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 40,
      }}>
        <FontAwesome name="shopping-cart" size={34} color="brown" />
        <Ionicons name="settings" size={34} color="gray" />
      </View>

      {/* Row 5 */}
      <View style={{
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 40,
      }}>
        <MaterialIcons name="camera" size={34} color="teal" />
        <Feather name="mail" size={34} color="navy" />
      </View>
    </View>
  );
}