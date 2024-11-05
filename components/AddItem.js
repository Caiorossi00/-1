import React, { useState } from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  width: 300px;
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.medium}px;
  padding: ${props => props.theme.spacing.large}px;
`;

const Input = styled.TextInput`
  border-width: 1px;
  border-color: ${props => props.theme.colors.gray};
  border-radius: ${props => props.theme.borderRadius.small}px;
  padding: 10px;
  margin-bottom: 10px;
`;

const Button = styled.Button``;

const AddItem = ({ addItem, closeModal }) => {
  const [name, setName] = useState('');

  const handleAddItem = () => {
    if (name.trim()) {
      addItem(name);
      setName('');
    }
  };

  return (
    <Container>
      <Input
        placeholder="Adicionar Item"
        value={name}
        onChangeText={setName}
      />
      <Button title="Adicionar Item" onPress={handleAddItem} />
      <Button title="Fechar" onPress={closeModal} />
    </Container>
  );
};

export default AddItem;
