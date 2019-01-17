import React, { Component } from 'react';
import { StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native';
import { Repo } from '../interfaces/reposInterfaces';

interface Props {
  item: Repo
}

class ReposListItem extends Component<Props> {
  handleLinkPress = () => {
    const { item } = this.props;
    Linking.canOpenURL(item.html_url).then(supported => {
      if (supported) {
        Linking.openURL(this.props.item.html_url);
      } else {
        console.log(`Don't know how to open URI: ${item.html_url}`);
      }
    });
  }
  render() {
    const { item } = this.props
    return (
      <TouchableOpacity onPress={this.handleLinkPress}>
        <View style={styles.listItem}>
          <View style={styles.listItemCell}>
            <Text style={styles.listItemTitle}>
              {item.name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default ReposListItem

const styles = StyleSheet.create({
  listItem: {
    paddingTop: 5,
    borderTopWidth: 1
  },
  listItemCell: {
    paddingLeft: 5,
    paddingRight: 5,

  },
  listItemTitle: {
    fontSize: 20
  }
});
