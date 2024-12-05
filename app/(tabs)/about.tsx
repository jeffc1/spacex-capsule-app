import { Text, View, StyleSheet, Image} from "react-native";

export default function AboutScreen() {
  return (
    <View
      style={styles.container}>
      <Text style={styles.text}>About our app.</Text>
      <Text style={styles.text}>This is the SpaceX Capsule App.</Text>
      <Image
        source={require('../../assets/rocket.gif')} // Path to your GIF
        style={styles.gif}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#25292e",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: '#fff'
  },
  gif: { 
    width: 200, 
    height: 200, 
    marginBottom: 16,
  },
});

