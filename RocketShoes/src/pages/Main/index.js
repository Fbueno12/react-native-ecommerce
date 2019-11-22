import React, { Component } from "react";

import { formatPrice } from "../../util/format";

import api from "../../services/api";

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

                            <Button>
                                <ItemAmount>
                                    <WhiteText>4</WhiteText>
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
