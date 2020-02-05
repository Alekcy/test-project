import React from 'react';
import { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { store } from "./store/index";
import { StudentsTable } from "./components/StudentsTable/StudentsTable";
import { Container } from "@material-ui/core";
import './App.css';

const App = () => {
    return (
        <Provider store={store}>
            <Container>
              <StudentsTable />
            </Container>
        </Provider>
    );
};

export default App;
