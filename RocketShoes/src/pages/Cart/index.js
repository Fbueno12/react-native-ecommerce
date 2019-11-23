import React, { Component } from "react";

import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/dist/MaterialIcons";

import Header from "../../components/Header";

import {
    Container,
    List,
    Product,
    ProductMain,
    Image,
    Description,
    Title,
    Price,
    ProductFooter,
    Quantity,
    QuantityControl,
    Footer,
    Text,
    TotalPrice,
    Button,
    TextButton
} from "./styles";

export default class Cart extends Component {
    static navigationOptions = {
        header: <Header />
    };

    static propTypes = {
        navigation: PropTypes.shape({
            getParam: PropTypes.func
        }).isRequired
    };

    state = {};

    render() {
        const { navigation } = this.props;
        const item = navigation.getParam("item");

        return (
            <Container>
                <List>
                    <Product>
                        <ProductMain>
                            <Image source={{ uri: item.image }} />
                            <Description>
                                <Title>{item.title}</Title>
                                <Price>{item.priceFormatted}</Price>
                            </Description>
                        </ProductMain>
                        <ProductFooter>
                            <QuantityControl>
                                <Icon
                                    name="remove"
                                    type="MaterialIcons"
                                    color="#000"
                                    size={18}
                                />
                                <Quantity editable={false}>1</Quantity>
                                <Icon
                                    name="add"
                                    type="MaterialIcons"
                                    color="#000"
                                    size={18}
                                />
                            </QuantityControl>
                            <Price>{item.priceFormatted}</Price>
                        </ProductFooter>
                    </Product>
                    <Product>
                        <ProductMain>
                            <Image source={{ uri: item.image }} />
                            <Description>
                                <Title>{item.title}</Title>
                                <Price>{item.priceFormatted}</Price>
                            </Description>
                        </ProductMain>
                        <ProductFooter>
                            <QuantityControl>
                                <Icon
                                    name="remove"
                                    type="MaterialIcons"
                                    color="#000"
                                    size={18}
                                />
                                <Quantity editable={false}>1</Quantity>
                                <Icon
                                    name="add"
                                    type="MaterialIcons"
                                    color="#000"
                                    size={18}
                                />
                            </QuantityControl>
                            <Price>{item.priceFormatted}</Price>
                        </ProductFooter>
                    </Product>
                    <Footer>
                        <Text>TOTAL</Text>
                        <TotalPrice>R$199,00</TotalPrice>
                        <Button>
                            <TextButton>ADICIONAR</TextButton>
                        </Button>
                    </Footer>
                </List>
            </Container>
        );
    }
}
