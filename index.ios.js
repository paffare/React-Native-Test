
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  NavigatorIOS, // should be just Navigator, it's better according to someone?
  StyleSheet,
  Component
} = React;

var SelectScreen = require('./SelectScreen');



class TestApp extends Component {

  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'TestApp',
          component: SelectScreen,
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

AppRegistry.registerComponent('TestApp', () => TestApp);

module.exports = TestApp;
