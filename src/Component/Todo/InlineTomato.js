import React, { Component } from 'react';

import CountDown from "../Clock/CountDown"

class InlineTomato extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h3>Inline Tomato Clock</h3>
                    <CountDown
                        Times = {this.props.Times}
                        enableTomato={this.props.enableTomato}
                        restrictMode={this.props.restrictMode}
                        inlineTomato={this.props.inlineTomato}
                    />
            </div>
        );
    }
}

export default InlineTomato;