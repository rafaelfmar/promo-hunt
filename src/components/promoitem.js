import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Body, Left, Card, CardItem, Text, Thumbnail } from 'native-base';

const promoitem = props => {
  const { title, description, price } = props.item;
  return (
    <TouchableOpacity>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail
              square
              large
              source={{
                uri: 'https://picsum.photos/150'
              }}
            />
            <Body>
              <Text style={styles.header}>{title}</Text>
              <Text note>{description}</Text>
              <Text>{price}</Text>
            </Body>
          </Left>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};

export default promoitem;

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold'
  }
});
