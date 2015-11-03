import React, {Component, PropTypes} from 'react';
import Subnav from './../subnav/subnav.react.jsx';

class Projects extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className='projects container'>
            <Subnav type='projects'/>
        </div>;
    }
}

export default Projects;