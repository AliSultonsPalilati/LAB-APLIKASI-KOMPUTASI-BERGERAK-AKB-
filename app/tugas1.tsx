import { Text, View, StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

export default function Index() {
  // Gunakan mode kolom jika layar kecil (misal HP)
  const isMobile = screenWidth < 600; // ambil ambang batas sekitar 600px

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.responsiveLayout,
          { flexDirection: isMobile ? "column" : "row" },
        ]}
      >
        <View style={styles.triangleStyle} />

        <View style={styles.rectangleContainer}>
          <Text style={styles.nameTextStyle}>Ali Sulton S Palilati</Text>
        </View>

        <View style={styles.capsuleContainer}>
          <Text style={styles.nimTextStyle}>105841102222</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  responsiveLayout: {
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 10,
  },
  triangleStyle: {
    width: 0,
    height: 0,
    borderLeftWidth: 40,
    borderRightWidth: 40,
    borderBottomWidth: 70,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#8E24AA",
    margin: 10,
  },
  rectangleContainer: {
    backgroundColor: "#00796B",
    width: 160,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    margin: 10,
  },
  capsuleContainer: {
    backgroundColor: "#D84315",
    width: 140,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    margin: 10,
  },
  nameTextStyle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  nimTextStyle: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
});