import React, { Component } from 'react'
import { Button, Label } from 'semantic-ui-react'
class Input extends Component {
    constructor(props){
        super(props)
        this.state={
            products:[]
        }

       
    }

     handlechange = (e) => {
        console.log(e?.target?.value)
    }


  render() {
      const { products } = this.state
    return (
        <>
        <div className='ui segment'>
            <form className='ui form' >
                <Label>Search Products</Label>
                <input 
                    type="text"
                    name="products" 
                    value={products} 
                    placeholder='enter your products'
                    onChange={this.handlechange}  />
            </form>
        </div>
        </>
    )
  }
}

export default Input