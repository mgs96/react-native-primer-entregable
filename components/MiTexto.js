import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class MiTexto extends React.Component {
  render() {
    return(
      <View>
        <Text style={{ fontSize: this.props.tamano }}>
          { this.props.elTexto }
        </Text>
      </View>
    );
  }
}

export default MiTexto;