import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
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
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 10,
  },
  triangleStyle: {
    width: 0,
    height: 0,
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 90,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#8E24AA",
  },
  rectangleContainer: {
    backgroundColor: "#00796B",
    width: 160,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    padding: 5,
  },
  capsuleContainer: {
    backgroundColor: "#D84315",
    width: 140,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
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