import React, { Component } from "react";

import PropTypes from "prop-types";

import Icon from "react-native-vector-icons/dist/MaterialIcons";
import { formatPrice } from "../../util/format";

import api from "../../services/api";
import Header from "../../components/Header";

import {
    Container,
    Description,
    DescriptionText,
    Product,
    Price,
    Image,
    Button,
    TextButton,
    ItemAmount,
    WhiteText,
    List
} from "./styles";

export default class Main extends Component {
    static navigationOptions = {
        header: <Header />
    };

    static propTypes = {
        navigation: PropTypes.shape({
            navigate: PropTypes.func
        }).isRequired
    };

    state = {
        products: []
    };

    async componentDidMount() {
        const response = await api.get("products");
        if (response) {
            const data = response.data.map(product => ({
                ...product,
                priceFormatted: formatPrice(product.price)
            }));
            this.setState({ products: data });
        }
    }

    handleNavigate = item => {
        const { navigation } = this.props;

        navigation.navigate("Cart", { item });
    };

    render() {
        const { products } = this.state;
        return (
            <Container>
                <List
                    data={products}
                    keyExtractor={product => String(product.id)}
                    renderItem={({ item }) => (
                        <Product>
                            <Image source={{ uri: item.image }} />
                            <Description>
                                <DescriptionText>{item.title}</DescriptionText>
                                <Price>{item.priceFormatted}</Price>
                            </Description>

                            <Button onPress={() => this.handleNavigate(item)}>
                                <ItemAmount>
                                    <Icon
                                        name="shopping-cart"
                                        type="MaterialIcons"
                                        color="white"
                                        size={18}
                                    />
                                    <WhiteText>0</WhiteText>
                                </ItemAmount>
                                <TextButton>ADICIONAR</TextButton>
                            </Button>
                        </Product>
                    )}
                />
            </Container>
        );
    }
}
