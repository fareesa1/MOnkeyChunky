import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity, ImageBackground
} from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import { Image } from 'react-native-elements';
import { Audio } from 'expo-av';



export default class IntroScreen extends React.Component {
 
  render() {
    return (
      <ImageBackground source= {require("../assets/images.jpg")} style={styles.container}>
        <Text style={styles.paragraph}>Monkey Chunky APP</Text>
       
       
        <Button
          title="Start"
          color="green"
          onPress={() => {this.props.navigation.navigate("HomeScreen")}}
        />
       
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'bisque',
    alignItems: 'center',
    padding: 2,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'orange',
    padding: 20,
    width: '100%',
    marginBottom: 50,
    color: 'bisque',
  },
});
