import React, { useState, useEffect } from 'react';
import { SafeAreaView, Modal, View, Button } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import AddItem from './components/AddItem';
import ItemList from './components/ItemList';
import { theme } from './theme';

const Container = styled(SafeAreaView)`
  flex: 1;
  padding: ${theme.spacing.large}px;
  background-color: ${theme.colors.background};
  justify-content: center;
  align-items: center;
`;

const AddButton = styled(Button)`
  margin-top: ${theme.spacing.large}px;
`;

const App = () => {
  const [items, setItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const addItem = (name) => {
    setItems([...items, { id: Date.now(), name, days: 0, lastIncrement: null }]);
    setModalVisible(false);
  };

  const incrementDays = (id) => {
    setItems((prevItems) =>
      prevItems.map(item => {
        const currentTime = Date.now();
        const timeSinceLastIncrement = item.lastIncrement ? currentTime - item.lastIncrement : null;

        if (timeSinceLastIncrement === null || timeSinceLastIncrement >= 86400000) {
          return { ...item, days: item.days + 1, lastIncrement: currentTime };
        }
        return item;
      })
    );
  };

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prevItems) =>
        prevItems.map(item => {
          if (item.lastIncrement) {
            const currentTime = Date.now();
            const timeSinceLastIncrement = currentTime - item.lastIncrement;

            if (timeSinceLastIncrement < 86400000) {
              return { ...item, countdown: 86400000 - timeSinceLastIncrement };
            }
          }
          return item;
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [items]);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <AddButton title="Adicionar Item" onPress={() => setModalVisible(true)} />
        
        <ItemList items={items} incrementDays={incrementDays} removeItem={removeItem} />

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <AddItem addItem={addItem} closeModal={() => setModalVisible(false)} />
          </View>
        </Modal>
      </Container>
    </ThemeProvider>
  );
};

export default App;
