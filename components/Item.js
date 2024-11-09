import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  padding: 15px;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 5px;
  background-color: #fff;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 300px;
`;

const InfoContainer = styled.View`
  flex-direction: column;
`;

const ItemText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const TimeText = styled.Text`
  font-size: 12px;
  color: #555;
`;

const DaysText = styled.Text`
  font-size: 32px;
  font-weight: bold;
`;

const ButtonContainer = styled.TouchableOpacity`
  background-color: #f0f0f0;
  padding: 5px 10px;
  border-radius: 5px;
  border-width: 1px;
  border-color: #ccc;
  margin-top: 5px;
`;

const ButtonText = styled.Text`
  font-size: 14px;
  color: #333;
`;

const Item = ({ item, incrementDays, deleteItem }) => {
  return (
    <Container>
      <InfoContainer>
        <ItemText>{item.name}</ItemText>
        <TimeText>{item.time}</TimeText>
        <ButtonContainer onPress={() => incrementDays(item.id)}>
          <ButtonText>+1</ButtonText>
        </ButtonContainer>
      </InfoContainer>
      <DaysText>{item.days}</DaysText>
    </Container>
  );
};

export default Item;
