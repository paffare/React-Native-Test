
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  NavigatorIOS, // should be just Navigator, it's better according to someone?
  StyleSheet,
  Component
} = React;

var Login = require('./login');

class ImagePickerTest extends Component {

  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'TestApp',
          component: Login,
          passProps: {}
        }}
      />
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

AppRegistry.registerComponent('ImagePickerTest', () => ImagePickerTest);

module.exports = ImagePickerTest;
