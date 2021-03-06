
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AlertIOS,
  Platform,
} from 'react-native';

var AlbumScreen = require('./AlbumScreen');


class SelectScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          React Native test!
        </Text>
          <TouchableHighlight style={styles.button}
            onPress={this.buttonClicked.bind(this)}>
            <Text style={styles.buttonText}>Open Album</Text>
          </TouchableHighlight>
      </View>
    );
  }

  buttonClicked(){
    if (Platform.OS === 'ios') {
      AlertIOS.alert('Test', 'More text lorem ipsum', [{text: 'Click me!'}])

      this.props.navigator.push({
        title: "AlbumScreen",
        component: AlbumScreen
        
      });
      
    } 
  }


}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 44,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

module.exports = SelectScreen;
