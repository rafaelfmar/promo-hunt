import React, { Component } from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import {
  Body,
  Container,
  Content,
  Card,
  CardItem,
  Fab,
  Text
} from 'native-base';

export default class main extends Component {
  static navigationOptions = {
    title: 'Promo Hunt'
  };

  state = {
    products: [
      {
        title: 'promo 1',
        description: 'desc 1'
      },
      {
        title: 'promo 2',
        description: 'desc 2'
      },
      {
        title: 'promo 3',
        description: 'desc 3'
      }
    ]
  };

  renderItem = ({ item }) => (
    <TouchableOpacity>
      <Card button>
        <CardItem>
          <Text style={styles.header}>{item.title}</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{item.description}</Text>
          </Body>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );

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
  },
  header: {
    fontWeight: 'bold'
  }
});
