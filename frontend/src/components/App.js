import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';
import Header from './layout/Header';
import Dashboard from './stocks/Dashboard';

class App extends Component{
    render(){
        return(
            <Fragment>
<Header/>
                <div className="container">
                    <Dashboard/>
                </div>
            </Fragment>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('app'));