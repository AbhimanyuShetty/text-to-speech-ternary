import * as React from 'react';
import * as Speech from 'expo-speech';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  speak = () => {
    var thingToSay = this.state.name;
    Speech.speak(thingToSay);
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'orange'}
          centerComponent={{
            text: 'Text To Sound',
            style: { color: '#fff', fontSize: 28, fontWeight: 'bold' },
          }}
        />

        <Image
          style={styles.imageIcon}
          source={require('./assets/chaticon.png')}
        />

        <Text style={styles.title}>Enter the word</Text>

        <TextInput
          style={styles.inputBox}
          onChangeText={(name) => this.setState({ name: name })}
          value={this.state.name}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            var word = this.state.name;
            word === '' ? alert('please type in a message') : this.speak();
          }}>
          <Text style={styles.buttonText}>Click to Hear</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
  },
  inputBox: {
    marginTop: 25,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    borderColor: '#2C5361',
    outline: 'none',
  },
  imageIcon: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 15,
  },
  title: {
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 20,
    fontSize: 17,
  },
  button: {
    width: '60%',
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: 60,
    backgroundColor: 'orange'
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 27,
    color: 'white'
  },
});
