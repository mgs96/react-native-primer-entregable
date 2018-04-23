import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Platform } from "react-native";
import MiTexto from "./components/MiTexto";
export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      name: '',
      name_2: ''
    }
  }

  onChangeText = () => {
    this.setState({
      name2: this.state.name
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>
          Hello, type your name:
        </Text>

        <TextInput
          placeholder="type yout name here"
          onChangeText={(name) => this.setState({name})} />

        <Button title="Tap me" onPress={this.onChangeText} />

        <Text style={{fontWeight: 'bold', fontSize: 20 }}>
          Hello { this.state.name2 }
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginTop: (Platform.OS) === 'ios' ? 20 : 50,
  },
});
