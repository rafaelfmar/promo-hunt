import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Button,
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Text
} from 'native-base';

const createpromo = () => {
  return (
    <Container style={styles.container}>
      <Content padder>
        <Form>
          <Item stackedLabel>
            <Label style={styles.text}>Link da promocao</Label>
            <Input />
          </Item>
          <Item stackedLabel>
            <Label style={styles.text}>Titulo</Label>
            <Input />
          </Item>
          <Item stackedLabel>
            <Label style={styles.text}>Descricao</Label>
            <Input />
          </Item>
          <Item stackedLabel>
            <Label style={styles.text}>Preco</Label>
            <Input />
          </Item>
          <Item stackedLabel>
            <Label style={styles.text}>Url da imagem</Label>
            <Input />
          </Item>
        </Form>
        <Button primary style={styles.button}>
          <Text>Enviar</Text>
        </Button>
      </Content>
    </Container>
  );
};

createpromo.navigationOptions = ({ navigation }) => ({
  title: 'Enviar nova promocao'
});

export default createpromo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#251e3e'
  },
  button: {
    justifyContent: 'center',
    backgroundColor: '#451e3e',
    marginTop: 40
  },
  text: {
    color: '#FFF'
  }
});
