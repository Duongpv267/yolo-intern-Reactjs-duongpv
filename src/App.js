import logo from './logo.svg';
import './App.css';
import React from 'react';

function Hello() {
  return (
    <div>
      <h1> Hello world </h1>
      <h2> Wellcome to React-Js</h2>
      <h3> 4 Cách định nghĩa function </h3>
    </div>
  )
}
function One() {
  return (
    <div>
      <h4> Cách 1 sử dụng function kiểu thông thường </h4>
    </div>
  )
}
var Two = function () {
  return (
    <div>
      <h4> Cách 2 sử dụng function gán biến </h4>
    </div>
  )
}
var Three = () => (
  <div>
    <h4> Cách 3 sử dụng function kiểu ES6 </h4>
  </div>
);
//rcjc
class Four extends React.Component {
  render() {
    return <button><h4>Cách 4 sử dụng class {this.props.name}</h4></button>;
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello />
        <p>
          Để bắt đầu học vui lòng truy cập  <code>src/App.js</code> chỉnh sửa và lưu lại
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
      <One />
      <Two></Two>
      <Three></Three>
      <hr />
      <Four />
      
    </div>
  );
}

export default App;
