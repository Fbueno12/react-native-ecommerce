import React, { Component } from "react";

import Logo from "../assets/images/Logo.png";

import { Imagem } from "./styles";

export default class Header extends Component {
    state = {};

    render() {
        return <Imagem source={Logo} />;
    }
}
