import { Link, Stack } from "expo-router"
import { Text, View, StyleSheet} from "react-native";

export default function NotFoundScreen() {
  return (
    <>
        <Stack.Screen options={{ title: "Oops.. not found"}}></Stack.Screen>
        <View style={styles.container}>
            <Link href="/(tabs)/about" style={styles.button}>
                Go back to home screen!
            </Link>
        </View>
    </>
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
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: '#fff',
    
  }
});

