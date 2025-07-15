import { Text, View, ScrollView } from "react-native";

export default function Index() {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#ECEFF1",
      }}
      contentContainerStyle={{
        alignItems: "center",
        paddingVertical: 60,
        paddingHorizontal: 30,
        minHeight: "100%",
      }}
      showsVerticalScrollIndicator={true}
    >
      {/* HEADER TUGAS */}
      <View
        style={{
          backgroundColor: "#37474F",
          paddingVertical: 18,
          paddingHorizontal: 25,
          borderRadius: 25,
          marginBottom: 50,
          borderWidth: 3,
          borderColor: "#263238",
        }}
      >
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 16,
            fontWeight: "800",
            textAlign: "center",
            letterSpacing: 1,
          }}
        >
          IMPLEMENTASI BENTUK GEOMETRIS
        </Text>
      </View>

      {/* BAGIAN 1: SEGITIGA */}
      <View
        style={{
          backgroundColor: "#FFFFFF",
          paddingVertical: 35,
          paddingHorizontal: 40,
          borderRadius: 18,
          marginBottom: 35,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 6 },
          shadowOpacity: 0.15,
          shadowRadius: 8,
          elevation: 10,
          borderLeftWidth: 4,
          borderLeftColor: "#D32F2F",
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: "700",
            color: "#D32F2F",
            marginBottom: 25,
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: 2,
          }}
        >
          1. Segitiga
        </Text>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 0,
              height: 0,
              borderStyle: "solid",
              borderLeftWidth: 85,
              borderRightWidth: 85,
              borderBottomWidth: 150,
              borderLeftColor: "transparent",
              borderRightColor: "transparent",
              borderBottomColor: "#D32F2F",
              transform: [{ rotate: "0deg" }],
              shadowColor: "#D32F2F",
              shadowOffset: { width: 0, height: 8 },
              shadowOpacity: 0.4,
              shadowRadius: 10,
              elevation: 12,
            }}
          />
        </View>
      </View>

      {/* BAGIAN 2: PERSEGI PANJANG */}
      <View
        style={{
          backgroundColor: "#FFFFFF",
          paddingVertical: 35,
          paddingHorizontal: 40,
          borderRadius: 18,
          marginBottom: 35,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 6 },
          shadowOpacity: 0.15,
          shadowRadius: 8,
          elevation: 10,
          borderLeftWidth: 4,
          borderLeftColor: "#1976D2",
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: "700",
            color: "#1976D2",
            marginBottom: 25,
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: 2,
          }}
        >
          2. Persegi Panjang
        </Text>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#1976D2",
              width: 340,
              height: 95,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 6,
              borderWidth: 3,
              borderColor: "#0D47A1",
              shadowColor: "#1976D2",
              shadowOffset: { width: 0, height: 6 },
              shadowOpacity: 0.35,
              shadowRadius: 9,
              elevation: 12,
              transform: [{ scale: 1.02 }],
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 19,
                fontWeight: "800",
                textAlign: "center",
                textShadowColor: "rgba(0, 0, 0, 0.4)",
                textShadowOffset: { width: 2, height: 2 },
                textShadowRadius: 3,
                letterSpacing: 0.8,
              }}
            >
              Ali Sulton S Palilati
            </Text>
          </View>
        </View>
      </View>

      {/* BAGIAN 3: BENTUK PIL (CAPSULE) */}
      <View
        style={{
          backgroundColor: "#FFFFFF",
          paddingVertical: 35,
          paddingHorizontal: 40,
          borderRadius: 18,
          marginBottom: 35,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 6 },
          shadowOpacity: 0.15,
          shadowRadius: 8,
          elevation: 10,
          borderLeftWidth: 4,
          borderLeftColor: "#F57C00",
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: "700",
            color: "#F57C00",
            marginBottom: 25,
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: 2,
          }}
        >
          3. Bentuk Pil (Capsule)
        </Text>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#F57C00",
              width: 320,
              height: 75,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 37.5, // Setengah dari height untuk capsule sempurna
              borderWidth: 3,
              borderColor: "#E65100",
              shadowColor: "#F57C00",
              shadowOffset: { width: 0, height: 6 },
              shadowOpacity: 0.35,
              shadowRadius: 9,
              elevation: 12,
              transform: [{ scale: 1.02 }],
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 18,
                fontWeight: "700",
                textAlign: "center",
                letterSpacing: 3,
                textShadowColor: "rgba(0, 0, 0, 0.4)",
                textShadowOffset: { width: 2, height: 2 },
                textShadowRadius: 3,
              }}
            >
              105841102222
            </Text>
          </View>
        </View>
      </View>

      {/* CATATAN IMPLEMENTASI */}
      <View
        style={{
          backgroundColor: "#263238",
          paddingVertical: 20,
          paddingHorizontal: 25,
          borderRadius: 15,
          marginTop: 20,
          borderWidth: 2,
          borderColor: "#37474F",
          width: "95%",
        }}
      >
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 14,
            fontWeight: "600",
            textAlign: "center",
            lineHeight: 22,
          }}
        >
          Implementasi menggunakan React Native StyleSheet{'\n'}
          dengan teknik border manipulation untuk segitiga{'\n'}
          dan border-radius calculation untuk bentuk capsule
        </Text>
      </View>

      {/* IDENTITAS */}
      <View
        style={{
          marginTop: 30,
          backgroundColor: "#455A64",
          paddingVertical: 12,
          paddingHorizontal: 20,
          borderRadius: 20,
          borderWidth: 2,
          borderColor: "#37474F",
        }}
      >
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 12,
            fontWeight: "500",
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          Tugas Pemrograman Mobile - Geometri
        </Text>
      </View>
    </ScrollView>
  );
}