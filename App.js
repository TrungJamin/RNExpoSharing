import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

//  eas update --branch preview --message "Updating the app"
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Expo!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
