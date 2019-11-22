import styled from "styled-components/native";

import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
    display: flex;
    flex-direction: row;
    background: #191920;
    height: 100%;
    padding-top: 20px;
`;
export const List = styled.FlatList.attrs({
    showsHorizontalScrollIndicator: false,
    horizontal: true
})``;

export const ItemBox = styled.View`
    display: flex;
    align-items: center;
    width: 220px;
    background: #fff;
    margin-left: 20px;
    border-radius: 4px;
    padding: 5px;
`;
export const ItemImage = styled.Image`
    width: 200px;
    height: 200px;
`;
export const ItemName = styled.Text`
    padding: 0 15px;
    color: #333;
    font-weight: bold;
`;
export const ItemPrice = styled.Text`
    font-size: 20px;
    font-weight: bold;
    padding: 0 15px;
`;
export const Product = styled.View`
    display: flex;
    align-items: center;
    width: 220px;
    height: 358px;
    background: #fff;
    margin-left: 20px;
    border-radius: 4px;
    padding: 10px;
`;
export const Image = styled.Image`
    width: 200px;
    height: 200px;
`;
export const Description = styled.View``;
export const DescriptionText = styled.Text`
    height: 35px;
    overflow: hidden;
`;

export const Price = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
`;

export const Button = styled(RectButton)`
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #7159c1;
    width: 200px;
    margin-top: 10px;
    border-radius: 4px;
    margin-top: auto;
`;

export const ItemAmount = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 53px;
    height: 48px;
    background-color: rgba(0, 0, 0, 0.1);
    padding-right: 15px;
`;

export const TextButton = styled.Text`
    color: #fff;
    font-weight: bold;
    margin: 0 auto;
`;

export const WhiteText = styled.Text`
    color: #fff;
`;
