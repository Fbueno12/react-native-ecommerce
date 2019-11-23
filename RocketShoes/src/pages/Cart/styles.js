import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
    display: flex;
    background: #191920;
    height: 100%;
    padding-top: 20px;
    align-items: center;
`;
export const List = styled.View`
    display: flex;
    background-color: #fff;
    width: 335px;
    height: 473px;
    border-radius: 4px;
    padding: 10px;
    padding-top: 20px;
    align-items: center;
`;
export const Product = styled.View`
    display: flex;
    align-items: flex-start;
    width: 305px;
    margin-bottom: 20px;
`;
export const ProductMain = styled.View`
    display: flex;
    flex-direction: row;
`;
export const Image = styled.Image`
    width: 80px;
    height: 80px;
`;
export const Description = styled.View`
    margin-left: 10px;
    width: 230px;
`;
export const Title = styled.Text`
    margin-bottom: 5px;
`;
export const Price = styled.Text`
    font-weight: bold;
    font-size: 18px;
`;
export const ProductFooter = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    background: #eeeeee;
    padding: 5px;
    border-radius: 4px;
`;
export const QuantityControl = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Quantity = styled.TextInput`
    padding: 0;
    padding-right: 5px;
    margin: 0 5px;
    background: #fff;
    width: 51px;
    height: 26px;
    text-align: right;
    border-radius: 4px;
`;
export const Footer = styled.View`
    align-items: center;
    width: 100%;
    margin-top: auto;
`;
export const Text = styled.Text`
    font-weight: bold;
    font-size: 18px;
    color: #999999;
`;
export const TotalPrice = styled.Text`
    font-size: 24px;
    font-weight: bold;
`;
export const Button = styled(RectButton)`
    align-items: center;
    background: #7159c1;
    width: 90%;
    padding: 10px;
    margin-top: 20px;
`;
export const TextButton = styled.Text`
    color: #fff;
`;
