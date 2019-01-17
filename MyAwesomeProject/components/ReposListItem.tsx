import React, { Component } from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';
import { connect } from 'react-redux'

interface Props {
  item: any
}

interface State {}

class ReposListItem extends Component<Props, State> {
  handleLinkPress = () => {
    const { item } = this.props;
    Linking.canOpenURL(item.html_url).then(supported => {
      if (supported) {
        Linking.openURL(this.props.item.html_url);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.item.html_url);
      }
    });
  }
  render() {
    const { item } = this.props
    return (
      <View style={styles.listItem}>
        <View style={styles.listItemCell}>
          <Text style={styles.listItemTitle}>
            {item.full_name}
          </Text>
        </View>
        <View style={styles.listItemCell}>
          <Text style={styles.listItemLink} onPress={this.handleLinkPress}>
            {item.html_url}
          </Text>
        </View>
      </View>
    );
  }
}

export default connect(
  state => ({

  })
)(ReposListItem)

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
    borderTopWidth: 1
  },
  listItemCell: {
    maxWidth: 150,
    paddingLeft: 5,
    paddingRight: 5,

  },
  listItemTitle: {
    fontSize: 20
  },
  listItemLink: {
    textDecorationLine: 'underline',
  }
});
