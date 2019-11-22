import React, { Component } from "react";

import Icon from "react-native-vector-icons/dist/MaterialIcons";
import Logo from "../assets/images/Logo.png";

import { Imagem, Container, Cart, AmountCircle } from "./styles";

export default class Header extends Component {
    state = {};

    render() {
        return (
            <Container>
                <Imagem source={Logo} />
                <Cart>
                    <Icon
                        name="shopping-cart"
                        type="MaterialIcons"
                        color="white"
                        backgroundColor="#7159c1"
                        size={18}
                    />
                    <AmountCircle>0</AmountCircle>
                </Cart>
            </Container>
        );
    }
}
