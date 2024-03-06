import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ flexDirection: "row", height: 50, width: 50, marginTop: 25 }}>
        <View
          style={{
            backgroundColor: "blue",
            justifyContent: "center",
            width: 50,
          }}
        >
          <Text>1</Text>
        </View>
        <View
          style={{
            backgroundColor: "purple",
            justifyContent: "center",
            alignItems: "center",
            width: 100,
          }}
        >
          <Text>2</Text>
        </View>

        <View
          style={{
            backgroundColor: "yellow",
            justifyContent: "center",
            alignItems: "center",
            width: 250,
          }}
        >
          <Text>3</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "red",
          width: 400,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>4</Text>
      </View>
      <View
        style={{
          backgroundColor: "green",
          width: 400,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>5</Text>
      </View>

      <View style={{ flexDirection: "row" ,flex:1 }}>
        <View style={{backgroundColor:'white', width:200,justifyContent:'center', alignItems:'center'}}>
          <Text >6</Text>
        </View>

        <View style={{backgroundColor:'blue',width:200,justifyContent:'center', alignItem:'center'}}>
          <Text>7</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
