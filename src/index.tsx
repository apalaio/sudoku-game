import React from 'react';
import ReactDOM from 'react-dom';
import { register, configureStore } from './core';
import { GlobalStyles, theme } from './styles';
import { ThemeProvider } from 'styled-components';
import { Card, Content, Title, Grid, Numbers, NewButton } from './components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = configureStore();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Content data-cy="content">
          <Title data-cy="title">Sudoku</Title>
          <Card data-cy="card">
            <NewButton />
            <Grid />
            <Numbers />
          </Card>
        </Content>
      </PersistGate>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);

register();
