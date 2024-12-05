import { Link } from "expo-router"
import { Text, View, StyleSheet, ActivityIndicator} from "react-native";
import { useEffect, useState } from "react";
import { ScreenStackProps } from "react-native-screens";

type Capsule = {
  capsule_serial: string;
  capsule_id: string;
  status: string;
  original_launch: string;
  missions: { name: string; flight: number }[];
  landings: number;
  type: string;
  reuse_count: number;
  details: string | null;
};


export default function Index() {
  const [capsule, setCapsule] = useState<Capsule | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //
    fetch('https://api.spacexdata.com/v3/capsules/C112')
      .then((response) => response.json())
      .then((data) => {
        setCapsule(data);
        setLoading(false)
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading capsule details...</Text>
      </View>
    );
  }

  if (!capsule) {
    return (
      <View style={styles.center}>
      <ActivityIndicator size="large" color="#FF0000" />
      <Text>Error: Capsule not found</Text>
    </View>
    );

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Capsule Serial: {capsule.capsule_serial}</Text>
      <Text style={styles.text}>Status: {capsule.status}</Text>
      <Text style={styles.text}>Original Launch: {new Date(capsule.original_launch).toLocaleDateString()}</Text>
      <Text style={styles.text}>Landings: {capsule.landings}</Text>
      <Text style={styles.text}>Type: {capsule.type}</Text>
      <Text style={styles.text}>Reuse Count: {capsule.reuse_count}</Text>
      <Text style={styles.text}>Mission: {capsule.missions[0]?.name} (Flight {capsule.missions[0]?.flight})</Text>
      <Text style={styles.text}>Details: {capsule.details || 'No details available'}</Text>
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
    color: '#fff',
    fontStyle: "italic"
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: '#fff',
    
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: "#0000FF"
  },
});

