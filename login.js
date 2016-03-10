import React from 'react-native';

const {
	StyleSheet,
	Component,
 	Text,
 	TextInput,
 	View,
 	TouchableHighlight,
} = React;

class Login extends Component {
	state = {
		email: '',
		password: ''
	};
	
render(){
	return(
		<View style = {styles.container}>
			<Text style = {styles.header}>
				JOCCE
			</Text>
			<Text style = {styles.text}>
				Email:
			</Text>
			<TextInput style = {styles.textInput}
				onChangeText = {(email) => this.setState({email})}
				value = {this.state.email}
			/>
			<Text style = {styles.text}>
				Password:
			</Text>
			<TextInput style = {styles.textInput}
				onChangeText = {(password) => this.setState({password})}
				value = {this.state.text}
				secureTextEntry = {true}
			/>
			<TouchableHighlight style={styles.button}
            	onPress={this.login.bind(this)}>
            <Text style = {styles.buttonText}>Login</Text>
            </TouchableHighlight>
		</View>
		);
}
login (){

}

}

var styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    margin: 20,
  },
header: {
	fontSize: 30,
	alignSelf: 'center',
	marginBottom: 50
},
text: {
	fontSize: 12,
},
textInput: {
	height: 40,
	fontSize: 20,
	borderWidth: 1,
	paddingLeft: 10,
	marginBottom: 10
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
    justifyContent: 'center',
    marginBottom: 10
}
});

module.exports = Login; 