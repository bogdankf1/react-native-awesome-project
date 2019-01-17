import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { connect } from 'react-redux'
import ReposList from './ReposList';
import { Dispatch } from 'redux'
import { FetchReposAction, AppActionTypes } from '../actions/reposActions';
import { Repo } from '../interfaces/reposInterfaces';

interface Props {
  reposList: Repo[],
  fetchRepos: Function
}

interface State {
  username: String
}

class ReposContainer extends Component<Props, State> {
  constructor(props: Props) {
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
    const { fetchRepos } = this.props
    const { username } = this.state

    if (!username) {
      return false
    }

    fetchRepos(username)
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
  }),
  (dispatch: Dispatch<FetchReposAction>) => ({
    fetchRepos: (username: string) => 
      dispatch({
        type: AppActionTypes.FETCH_REPOS,
        payload: {
          username
        }
      })
  })
)(ReposContainer)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 150
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
