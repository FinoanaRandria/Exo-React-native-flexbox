import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.main_container}>
      <Text style={styles.text_color}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles =StyleSheet.create({
     main_container:{
        backgroundColor:"white",
        display:"flex",
        flex:1,
        alignItems:'center',
        justifyContent:"center",
        borderColor:"black"
     },
     text_color:{
      color:"green",
      borderColor:"black"
     }

})
