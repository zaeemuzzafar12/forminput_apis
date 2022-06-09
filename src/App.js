import './App.css';
import Input from './componnets/Input'
import Data from './componnets/Data';
import React from 'react';
import { toast } from 'react-toastify';
class App extends React.Component {
state={
  data:[]
}
 
  
  formSubmit = async (products) => {
    try{
      console.log("App.js", products)
      let colors = "purple" && "orange" && "yellow"
      let page = 3
      let url = (`https://api.unsplash.com/search/photos?${page}&query=${products}&color=${colors}`)
      let AuthMethods = {headers:{ Authorization: `Client-ID HeZctCz8uqJD8FEeb4fRaEcnlitS5lTbikyw2VK2aPc`  }}
      let data = await fetch(url,AuthMethods)
      let response = await data.json()
      this.setState({data: response?.results })
      toast.success("Data is Fetched Successfully")
    }
    catch(err){
      toast.error("Data Not Found",err)
    }

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
