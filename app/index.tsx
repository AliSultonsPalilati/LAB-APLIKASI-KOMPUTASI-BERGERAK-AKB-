import { Text, View, ScrollView } from "react-native";

export default function Index() {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#FAFAFA",
      }}
      contentContainerStyle={{
        alignItems: "center",
        paddingVertical: 50,
        paddingHorizontal: 25,
        minHeight: "100%",
        justifyContent: "space-evenly",
      }}
      showsVerticalScrollIndicator={false}
    >
      {/* BENTUK SEGITIGA */}
      <View
        style={{
          alignItems: "center",
          marginVertical: 40,
        }}
      >
        <View
          style={{
            width: 0,
            height: 0,
            borderStyle: "solid",
            borderLeftWidth: 75,
            borderRightWidth: 75,
            borderBottomWidth: 130,
            borderLeftColor: "transparent",
            borderRightColor: "transparent",
            borderBottomColor: "#E91E63",
            shadowColor: "#E91E63",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 6,
            elevation: 8,
          }}
        />
        <Text
          style={{
            marginTop: 15,
            fontSize: 16,
            fontWeight: "500",
            color: "#424242",
            letterSpacing: 0.5,
          }}
        >
          Segitiga
        </Text>
      </View>

      {/* BENTUK PERSEGI PANJANG DENGAN NAMA */}
      <View
        style={{
          alignItems: "center",
          marginVertical: 40,
        }}
      >
        <View
          style={{
            backgroundColor: "#00ACC1",
            width: 300,
            height: 90,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 12,
            borderWidth: 3,
            borderColor: "#0097A7",
            shadowColor: "#00ACC1",
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.25,
            shadowRadius: 7,
            elevation: 10,
            transform: [{ rotate: "0deg" }],
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 20,
              fontWeight: "700",
              textAlign: "center",
              textShadowColor: "rgba(0, 0, 0, 0.3)",
              textShadowOffset: { width: 1, height: 1 },
              textShadowRadius: 2,
            }}
          >
            Ali Sulton S Palilati
          </Text>
        </View>
        <Text
          style={{
            marginTop: 15,
            fontSize: 16,
            fontWeight: "500",
            color: "#424242",
            letterSpacing: 0.5,
          }}
        >
          Persegi Panjang
        </Text>
      </View>

      {/* BENTUK PIL (CAPSULE) DENGAN NIM */}
      <View
        style={{
          alignItems: "center",
          marginVertical: 40,
        }}
      >
        <View
          style={{
            backgroundColor: "#FF7043",
            width: 280,
            height: 65,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 32.5,
            borderWidth: 2,
            borderColor: "#FF5722",
            shadowColor: "#FF7043",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
            elevation: 12,
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 18,
              fontWeight: "600",
              letterSpacing: 2,
              textAlign: "center",
              textShadowColor: "rgba(0, 0, 0, 0.25)",
              textShadowOffset: { width: 1, height: 1 },
              textShadowRadius: 1,
            }}
          >
            105841102222
          </Text>
        </View>
        <Text
          style={{
            marginTop: 15,
            fontSize: 16,
            fontWeight: "500",
            color: "#424242",
            letterSpacing: 0.5,
          }}
        >
          Bentuk Pil (Capsule)
        </Text>
      </View>

      {/* FOOTER INFO */}
      <View
        style={{
          marginTop: 30,
          padding: 20,
          backgroundColor: "#FFFFFF",
          borderRadius: 15,
          borderWidth: 1,
          borderColor: "#E0E0E0",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 5,
        }}
      >
      </View>
    </ScrollView>
  );
}