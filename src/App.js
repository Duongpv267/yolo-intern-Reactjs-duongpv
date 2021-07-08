import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, Wellcome to React js
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div className="container">
        <div className="row">

          <div className="col-4">
            <div className="card">
              <img className="card-img-top" src="https://place-hold.it/300" alt=""></img>
              <div className="card-body">
                <h4 className=" cart-title">Title</h4>
                <p className="cart-text">Text</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <img className="card-img-top" src="https://place-hold.it/300" alt=""></img>
              <div className="card-body">
                <h4 className=" cart-title">Title</h4>
                <p className="cart-text">Text</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <img className="card-img-top" src="https://place-hold.it/300" alt=""></img>
              <div className="card-body">
                <h4 className=" cart-title">Title</h4>
                <p className="cart-text">Text</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
