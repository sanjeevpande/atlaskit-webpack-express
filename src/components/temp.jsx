import React, { Component } from 'react';

//import SampleStore from '../../store/sample.store.js';
import SampleAction from '../../actions/sample.action.js';

class App extends Component {
    constructor(props) {
        super(props);
        console.log('Hello');
    }
    helloWorld() {
        alert('I am atlaskit button !');
    }
    getInfoForCloudFetch() {
        this._sampleStore.dispatch(this._sampleAction.getInfoForCloudFetch());
    }
    getInfoForCloudAJS() {
        this._sampleStore.dispatch(this._sampleAction.getInfoForCloudAJS());
    }
    getInfoForZFJFetch() {
        this._sampleStore.dispatch(this._sampleAction.getInfoForZFJFetch());
    }
    getInfoForZFJAJS() {
        this._sampleStore.dispatch(this._sampleAction.getInfoForZFJAJS());
    }
    render() {
        return (
          <div className="App">
            <div className="App-header">
                <img className="App-logo" alt="logo" />
                <h2>Welcome to ZFJCLOUD</h2>
            </div>
        </div>
        )
    }
}

export default App;
