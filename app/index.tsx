import { Image, Text, View } from "react-native";
import {Image as ExpoImage }from "expo-image";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF", // opsional: untuk memberikan latar belakang putih
      }}
    >
      <View
        style={{
          backgroundColor: "#FF5722",
          height: 100,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          marginBottom: 20,
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Ali Sulton S Palilati - 105841102222
        </Text>
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          105841102222
        </Text>
      </View>

      <Image
          style={{
            width: 300,
            height: 300,
            borderRadius: 10,
          }}
        source={{
          uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841102222_.jpg?1752197261",
        }}
      />
      <ExpoImage
          style={{
            width: 200,
            height: 200,
            borderRadius: 10,
            marginTop: 20,
          }}
        source={{
          uri: "https://i.pinimg.com/736x/79/5e/dc/795edc5bc32abf64427fd1269cc14f2d.jpg",
        }}
      />
      
      <View
        style={{
          backgroundColor: "#FF5722",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
          marginTop: 20,
          height: 100,
          width: 100,
        }}
      >
      </View>
    </View>
  );
}
