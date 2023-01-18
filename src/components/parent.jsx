import React, { Component } from 'react';
import Counter from './counter';


class Parent  extends Component {
    state = {
        arr: [
          {id: 1, value: 9329, input: 'Abhi'},
          {id: 2, value: 999, input: 'XYZ'},
          {id: 3, value: 888, input: 'ABC'},  
        ]
      } 
    render() { 
        return (<div>
            {this.state.arr.map(counter => 
            <Counter key={counter.id} value={counter.value} input={counter.input} selected={true}/>)}
        </div>);
    }
}
 
export default Parent ;