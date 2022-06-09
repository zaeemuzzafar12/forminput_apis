import React, { Component } from 'react'
import { Button, Label } from 'semantic-ui-react'
class Input extends Component {
    state={
        products:""
        
    }

     handlechange = (e ,products) => {
         this.setState({products:e.target.value})
    }

    FormSubmit = (e) => {
        e.preventDefault();
        this.props.onChangeSubmit(this.state.products);
        
    }

  render() {
      const { products } = this.state;
    return (
        <>
            <div className='ui segment'> 
                <form className='ui form' onSubmit={this.FormSubmit} >
                    <Label>Search Products</Label>
                    <input 
                        type="text"
                        name="products" 
                        value={products} 
                        placeholder='enter your products'
                        onChange={(e) => this.handlechange(e,products) }
                        // onChange={(e) =>  this.setState({products:e.target.value})} 
                         />
                </form>
            </div>
        </>
    )
  }
}

export default Input