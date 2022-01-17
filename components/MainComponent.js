import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { CAMPSITES } from '../shared/campsites';

// Class Component
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES
        };
    }
    render() {
        return <Directory campsites={this.state.campsites} />;

    }
}
//Function Component with hook
// function Main(props) {
//     const [campsites] = React.useState(CAMPSITES);

//     return (
//         <Directory campsites={campsites} />
//     );
// }

export default Main;



