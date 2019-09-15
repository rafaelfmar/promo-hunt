import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
    Container,
    Label,
    Content,
    Form,
    Item,
    Input,
    Button,
    Text
} from 'native-base';

export default class login extends Component {
    static navigationOptions = {
        title: 'Login'
    };
    render() {
        return (
            <Container style={styles.Container}>
                <Content padder>
                    <Form>
                        <Item floatingLabel>
                            <Label style={styles.Text}>E-mail</Label>
                            <Input style={styles.Text} />
                        </Item>
                        <Item floatingLabel>
                            <Label style={styles.Text}>Senha</Label>
                            <Input style={styles.Text} secureTextEntry />
                        </Item>
                    </Form>
                    <Button
                        primary
                        style={styles.Button}
                        onPress={() => {
                            this.props.navigation.navigate('Main');
                        }}
                    >
                        <Text>Entrar</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#051e3e'
    },
    Button: {
        justifyContent: 'center',
        backgroundColor: '#451e3e',
        marginTop: 40
    },
    Text: {
        color: '#FFF'
    }
});
