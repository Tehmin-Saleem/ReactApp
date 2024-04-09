import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Header from './components/Header';
import MobilesData from './components/MobilesData';
import Footer from './components/Footer';
import './App.css';
function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <MobilesData />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
