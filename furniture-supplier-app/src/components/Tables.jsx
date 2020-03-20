import React, { Component, Fragment } from 'react';

class Tables extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tableList: ['Wooden Table','Metal Table','Lawn Table']
         }
    }
    render() { 
        return ( 
            <Fragment>
                     <h2>List of Tables</h2>
                {this.state.tableList.map(
                    (table,inx) => {
                        return  (
                            <div key={inx}>
                                <p>{table}</p>
                            </div>
                        )
                    }
                )}
            </Fragment>
         );
    }
}
 
export default Tables;