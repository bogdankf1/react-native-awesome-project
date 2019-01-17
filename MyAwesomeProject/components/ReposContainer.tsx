import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { APP } from '../constants/ActionTypes';
import { connect } from 'react-redux'
import ReposList from './ReposList';

interface Props {
  dispatch: any,
  reposList: []
}

interface State {
  username: String
}

class ReposContainer extends Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      username: ''
    }
  }
  handleTextInputChange = (inputText: String) => {
    this.setState({
      username: inputText
    })
  }
  handleButtonPress = () => {
    const { dispatch } = this.props
    const { username } = this.state

    if (!username) {
      return false
    }

    dispatch({
      type: APP.FETCH_REPOS.REQUEST,
      payload: username
    })
  }
  render() {
    const { reposList } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Repos Container!</Text>
        <View>
          <TextInput
            style={{height: 40}}
            placeholder="Type here to translate!"
            onChangeText={this.handleTextInputChange}
          />
          <Button title="Button" onPress={this.handleButtonPress}></Button>
          <ReposList list={reposList} />
        </View>
      </View>
    );
  }
}

export default connect(
  (state: any) => ({
    reposList: state.reposReducer.reposList
  })
)(ReposContainer)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 70
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
