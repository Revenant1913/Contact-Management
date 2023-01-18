import React, { Component, useState }  from 'react';
import Edit from './edit';



class Counter extends Component {
    
    state = {
        contact: {
             name: this.props.data,
            num: this.props.value
        },
        

      };
      

    render() { 
        
        return (<div>
            
            <Edit />            
            </div>
        
        );
    }
    display(){
        const {contact} = this.state
        return contact.name + ' ' + contact.num + ' ';
    }        
}
 
export default Counter;

