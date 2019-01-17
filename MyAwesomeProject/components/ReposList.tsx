import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ReposListItem from './ReposListItem';
import { Repo } from '../interfaces/reposInterfaces';

interface Props {
  list: Repo[]
}

class ReposList extends Component<Props> {
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

export default ReposList

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
