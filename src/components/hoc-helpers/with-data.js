import React, { Component } from 'react';
import Spinner from '../spinner';

const withData = (View) => {
    return class extends Component {
        state = {
        data: null
        }

        componentDidMount() {      
        this.props.getData().then(data => (
            this.setState({data})  
        ))
        }

        render(){
        const { data } = this.state;

        return data ? <View {...this.props} data={data} /> : <Spinner />;
        }
    }
}

export default withData;