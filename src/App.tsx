import React from 'react';
import { Provider } from 'react-redux';
import { store } from "./store/index";
import { StudentsTable } from "./components/StudentsTable/StudentsTable";
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
      <Provider store={store}>
        <div className="App">
          <StudentsTable />
        </div>
      </Provider>
  );
}

export default App;
