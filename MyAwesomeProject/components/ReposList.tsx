import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { APP } from '../constants/ActionTypes';
import { connect } from 'react-redux'
import ReposListItem from './ReposListItem';

interface Props {
  dispatch: any,
  list: []
}

interface State {}

class ReposList extends Component<Props, State> {
  render() {
    const { list } = this.props
    return (
      <View style={styles.container}>
        {list.length ? <Text style={styles.reposListTitle}>Repos list:</Text> : null}
        <FlatList
          data={list}
          renderItem={({ item }:any) => <ReposListItem item={item} />}
        />
      </View>
    );
  }
}

export default connect(
  state => ({

  })
)(ReposList)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15
  },
  reposListTitle: {
    fontSize: 24
  }
});
