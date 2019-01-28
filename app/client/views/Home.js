import React, {Component} from 'react';
import '../stylus/main.styl'

export default class AppView extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div className='Home'>
                Home Page
            </div>
        );
    }
}
