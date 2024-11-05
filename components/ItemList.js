import React from 'react';
import styled from 'styled-components/native';

const ListContainer = styled.View`
  margin-top: ${props => props.theme.spacing.medium}px;
`;

const ItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing.small}px;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.colors.gray};
`;

const ItemText = styled.Text`
  font-size: 18px;
`;

const CountdownText = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.colors.gray};
`;

const IncrementButton = styled.Button``;

const RemoveButton = styled.Button``;

const ItemList = ({ items, incrementDays, removeItem }) => {
  return (
    <ListContainer>
      {items.map(item => (
        <ItemContainer key={item.id}>
          <ItemText>{item.name}: {item.days} dias</ItemText>
          {item.countdown !== undefined && item.countdown > 0 ? (
            <CountdownText>
              {Math.floor(item.countdown / 3600000)}h {Math.floor((item.countdown % 3600000) / 60000)}m {Math.floor((item.countdown % 60000) / 1000)}s
            </CountdownText>
          ) : (
            <CountdownText>Pronto para incrementar</CountdownText>
          )}
          <IncrementButton title="+1" onPress={() => incrementDays(item.id)} />
          <RemoveButton title="Remover" onPress={() => removeItem(item.id)} />
        </ItemContainer>
      ))}
    </ListContainer>
  );
};

export default ItemList;
