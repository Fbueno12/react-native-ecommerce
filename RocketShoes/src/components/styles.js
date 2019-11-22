import styled from "styled-components/native";

export const Container = styled.View`
    background: #191919;
    height: 45px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
`;

export const Cart = styled.View`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

export const Imagem = styled.Image`
    height: 24px;
`;

export const AmountCircle = styled.Text`
    font-size: 10px;
    color: #fff;
    background: #7159c1;
    width: 15px;
    height: 15px;
    text-align: center;
    border-radius: 7.5px;
    transform: translateY(-10px);
`;
