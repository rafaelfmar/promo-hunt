import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Container, Content, Fab, Text } from 'native-base';

import PromoItem from '../components/promoitem';

export default class main extends Component {
  static navigationOptions = {
    title: 'Promo Hunt'
  };

  state = {
    products: [
      {
        title: 'promo 1',
        description: 'desc 1',
        price: 10.99,
        link: 'https://www.google.com/'
      },
      {
        title: 'promo 2',
        description: 'desc 2',
        price: 13.9,
        link: 'https://www.google.com/'
      }
    ]
  };

  renderItem = ({ item }) => <PromoItem item={item} />;

  render() {
    return (
      <Container style={styles.container}>
        <Content padder>
          <FlatList
            data={this.state.products}
            keyExtractor={item => item.title}
            renderItem={this.renderItem}
          />
        </Content>
        <Fab
          style={styles.fab}
          onPress={() => {
            this.props.navigation.navigate('CreatePromo');
          }}
        >
          <Text>+</Text>
        </Fab>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#251e3e'
  },
  fab: {
    backgroundColor: '#451e3e',
    fontWeight: 'bold'
  }
});
