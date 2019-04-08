
import React from 'react';

export default function WithHome(Component) {
    return class extends React.Component {
        constructor(props) {
            super(props);
    
        }

        render() {
            // console.log("withhome:", this.props)
            return <Component state={this.state} {...this.props} />
        }
    }
}



