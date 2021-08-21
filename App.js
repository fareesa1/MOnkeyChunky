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
import data from './localdb';
import { Card } from 'react-native-paper';
import { Image } from 'react-native-elements';
import { Audio } from 'expo-av';

class PhonicSound extends React.Component {
  playSound = () => {
    var phone = this.props.phone;
    console.log(phone);
    Audio.Sound.createAsync(
      {
        uri:
          'https://s3-whitehatjrcontent.whjr.online/phones/' +
          this.props.phone +
          '.mp3',
      },
      { shouldPlay: true }
    );
  };

  render() {
    return (
      <TouchableOpacity
      
        onPress={() => {
          this.playSound();
        }}
        style={{ padding: 7, backgroundColor: 'coral', margin: 5 }}>
        <Text>{this.props.word}</Text>
      </TouchableOpacity>
    );
  }
}

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      word: '',
      chunks: [],
      phones: [],
    };
  }

  render() {
    return (
      <ImageBackground source= {require("./assets/images.jpg")} style={styles.container}>
        <Text style={styles.paragraph}>Monkey Chunky APP</Text>
        <Image
          source={{
            uri:
              'https://cdn.dribbble.com/users/86682/screenshots/3861506/week93_monkey.gif',
          }}
          style={{ width: 200, height: 200, borderRadius: 50 }}
        />
        <TextInput
          placeholder="Write A Word"
          style={{ padding: 20, margin: 50, backgroundColor: 'white' }}
          onChangeText={(text) => {
            this.setState({ word: text });
          }}
        />
        <Button
          title="GO"
          color="green"
          onPress={() => {
            console.log(this.state.displayWord);
this.state.word = this.state.word.toLowerCase().trim()
            data[this.state.word] !== undefined ? 
              (this.setState({ chunks: data[this.state.word].chunks }),
              this.setState({ phones: data[this.state.word].phones }))
            : alert('try again');
            
          }}
        />
        <View>
          {this.state.chunks.map((x, i) => {
            return <PhonicSound word={x} phone={this.state.phones[i]} />;
          })}
        </View>
        <Text>{this.state.chunks}</Text>
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
