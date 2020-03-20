import React, { Component, Fragment } from 'react';

class Chairs extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            chairList: ['Wooden Chair','Folding Chair', 'Lawn Chair']
         }
    }
    render() { 
        return ( 
            <Fragment>
                <h2>List of Chairs</h2>
                {this.state.chairList.map(
                    (chair,inx) => {
                        return  (
                            <div key={inx}>
                                <p>{chair}</p>
                            </div>
                        )
                    }
                )}
            </Fragment>
         );
    }
}
 
export default Chairs;