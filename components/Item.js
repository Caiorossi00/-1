import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  padding: 10px;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 5px;
  background-color: #fff;
  display:flex;
  flex-direction: row;
  gap: 3em;
`;

const ItemText = styled.Text`
  font-size: 18px;
`;

const DaysText = styled.Text`
  font-size: 16px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Button = styled.Button``;

const Item = ({ item, incrementDays, deleteItem }) => {
  return (
    <Container>
      <ItemText>{item.name}</ItemText>
      <DaysText>{item.days} dias</DaysText>
      <ButtonContainer>
        <Button title="+1 Dia" onPress={() => incrementDays(item.id)} />
        <Button title="Excluir" onPress={() => deleteItem(item.id)} />
      </ButtonContainer>
    </Container>
  );
};

export default Item;
