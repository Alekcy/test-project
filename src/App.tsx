import React from 'react';
import { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { store } from "./store/index";
import { StudentsTable } from "./components/StudentsTable/StudentsTable";
import { loadStudentsFromStorage } from "./store/students/actions";
import './App.css';

const App = () => {
    return (
        <Provider store={store}>
            <div className="App">
              <StudentsTable />
            </div>
        </Provider>
    );
};

export default App;
