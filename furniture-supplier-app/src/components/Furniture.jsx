import React, { Component, Fragment } from 'react';
import Chairs from './Chairs';
import Tables from './Tables';
import '../App.css';

class Furniture extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <div className="container">
                    <h1 className="header">This is a list of our furiture</h1>

                    <div className="chairs">
                        <Chairs/>
                    </div>

                    <div className="tables">
                        <Tables/>
                    </div>
                </div>
            </Fragment>
         );
    }
}
 
export default Furniture;