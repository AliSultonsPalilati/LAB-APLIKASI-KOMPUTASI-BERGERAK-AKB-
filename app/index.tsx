import { Text, View, ScrollView } from "react-native";

export default function Index() {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#F5F5F5",
      }}
      contentContainerStyle={{
        alignItems: "center",
        paddingVertical: 40,
        paddingHorizontal: 20,
      }}
      showsVerticalScrollIndicator={false}
    >
      {/* BENTUK SEGITIGA */}
      <View
        style={{
          marginVertical: 30,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            color: "#333333",
            marginBottom: 15,
          }}
        >
          SEGITIGA
        </Text>
        <View
          style={{
            width: 0,
            height: 0,
            borderStyle: "solid",
            borderLeftWidth: 80,
            borderRightWidth: 80,
            borderBottomWidth: 140,
            borderLeftColor: "transparent",
            borderRightColor: "transparent",
            borderBottomColor: "#9C27B0",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 6,
          }}
        />
      </View>

      {/* BENTUK PERSEGI PANJANG DENGAN TEKS NAMA */}
      <View
        style={{
          marginVertical: 30,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            color: "#333333",
            marginBottom: 15,
          }}
        >
          PERSEGI PANJANG
        </Text>
        <View
          style={{
            backgroundColor: "#2196F3",
            width: 320,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            borderWidth: 2,
            borderColor: "#1976D2",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.25,
            shadowRadius: 5,
            elevation: 8,
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 22,
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
      </View>

      {/* BENTUK PIL (CAPSULE) DENGAN TEKS NIM */}
      <View
        style={{
          marginVertical: 30,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            color: "#333333",
            marginBottom: 15,
          }}
        >
          BENTUK PIL (CAPSULE)
        </Text>
        <View
          style={{
            backgroundColor: "#FF5722",
            width: 300,
            height: 70,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 35, // Setengah dari height untuk membuat ujung bulat penuh
            borderWidth: 2,
            borderColor: "#D84315",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.25,
            shadowRadius: 5,
            elevation: 8,
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 20,
              fontWeight: "600",
              textAlign: "center",
              letterSpacing: 1.5,
              textShadowColor: "rgba(0, 0, 0, 0.3)",
              textShadowOffset: { width: 1, height: 1 },
              textShadowRadius: 2,
            }}
          >
            105841102222
          </Text>
        </View>
      </View>

      {/* PENJELASAN PERBEDAAN BENTUK */}
      <View
        style={{
          marginTop: 40,
          padding: 20,
          backgroundColor: "#FFFFFF",
          borderRadius: 12,
          borderWidth: 1,
          borderColor: "#E0E0E0",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
          elevation: 4,
          width: "90%",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            color: "#333333",
            marginBottom: 10,
            textAlign: "center",
          }}
        >
          Penjelasan Bentuk:
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "#666666",
            lineHeight: 20,
            textAlign: "left",
          }}
        >
          • Segitiga: Dibuat dengan border triangle technique{'\n'}
          • Persegi Panjang: Width lebih besar dari height (320x100){'\n'}
          • Bentuk Pil: Persegi panjang dengan border-radius = height/2 (35px) untuk ujung bulat penuh
        </Text>
      </View>

      {/* FOOTER */}
      <View
        style={{
          marginTop: 30,
          marginBottom: 20,
          padding: 15,
          backgroundColor: "#4CAF50",
          borderRadius: 8,
          width: "80%",
        }}
      >
        <Text
          style={{
            fontSize: 14,
            color: "#FFFFFF",
            textAlign: "center",
            fontWeight: "500",
          }}
        >
          Tugas Pembuatan Bentuk Geometris
        </Text>
      </View>
    </ScrollView>
  );
}