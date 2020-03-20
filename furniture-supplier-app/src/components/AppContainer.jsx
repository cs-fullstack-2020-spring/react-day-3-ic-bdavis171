import React, { Component, Fragment } from 'react';
import Furniture from './Furniture';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <Furniture/>
            </Fragment>
         );
    }
}
 
export default AppContainer;