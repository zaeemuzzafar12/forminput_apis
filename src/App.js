import './App.css';
import Input from './componnets/Input'
import Data from './componnets/Data';
import React from 'react';

class App extends React.Component {
state={
  data:[]
}
 
  
  formSubmit = async (products) => {
    console.log("App.js", products)
    let url = (`https://api.unsplash.com/search/photos?query=${products}`)
    let AuthMethods = {headers:{ Authorization: `Client-ID HeZctCz8uqJD8FEeb4fRaEcnlitS5lTbikyw2VK2aPc`  }}
    let data = await fetch(url,AuthMethods)
    let response = await data.json()
    this.setState({data: response?.results })
  }

  

  render(){
    
    return (
      <div className="App">
        <Input onChangeSubmit={this.formSubmit} />
        <Data data={this.state.data} />
      </div>
    );
  }
}

export default App;
