import React, { Component } from 'react';

class About extends Component {

    render() {
        return (
            <div className="container">
                <h1>About</h1>
                {/* <hr/> */}
                <p>A React App Combiming Todo and Tomato Clock Together</p>
                <hr/>
                <h4>Setting</h4>
                <label><li>Restrict Mode</li></label>
                <p>
                    <tr>As seen from the name, 
                    Restrict Mode will disable single delete button which will 
                    prevent you from deleting the item you added on the list.</tr>
                    <tr>Hard tasks left on the list of no doubt make you not that happy.</tr>
                    <tr>So, urge yourself to complete them instead of cheating yourself...</tr>
                    <tr>Eh, at least we have taken away your delete button XD .</tr>
                </p>

                <p>
                    <tr>Restrict Mode will also disable Inline Toamto 
                    Clock and the Pause Option of the Tomato (Count Down) Clock</tr>
                    
                </p>
                
                <h4>To Do</h4>
                <h4>Clock</h4>

                <hr/>
                <p>Designed by HYY at BUPT</p>
                <br/>
            </div>
        );
    }
}

export default About;