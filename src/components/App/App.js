import React from 'react';
import { Hw1 } from '../Hw1/Hw1';
import LanguageChanger from '../LanguageChanger/LanguageChanger';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isShow: true,
    };
  }
  render() {
    return (
      <div className="App" >
        <button onClick={() => this.setState({ isShow: !this.state.isShow })}>CLICK</button>
        {this.state.isShow && <Hw1 />}
        <LanguageChanger />
      </div>
    );
  }
}
export default App;