/**
 * About说明
 * @component
 * @author 贺烨毅 2019210737
 */

import React, { Component } from 'react';
/**
 * 作者的信息和软件的使用说明的文字
 *  @author 贺烨毅 2019210737
 */
class About extends Component {
    /**
     * render
     */
    render() {
        return (
            <div className="container">
                <h1>About</h1>
                {/* <hr/> */}
                <p>A React App Combining Todo and Tomato Clock Together</p>
                <hr/>
                <h4>Setting</h4>
                <label><li>Restrict Mode</li></label>
                <p>
                    <tr>As seen from the name, 
                    Restrict Mode will disable some features to help you concentrate better.</tr>
                </p>
                <p>
                    <li>Disable Single Item Delete Button</li>
                    <tr>Restrict Mode will disable single delete button which will 
                    prevent you from deleting the item you added on the list.</tr>
                    <tr>Hard tasks left on the list of no doubt make you not that happy.</tr>
                    <tr>So, urge yourself to complete them instead of cheating yourself...</tr>
                    <tr>Eh, at least we have taken away your delete button XD .</tr>
                </p>

                <p>
                    <li>Disable Inline Tomato Clock</li>
                    <tr>Restrict Mode will disable Inline Tomato Clock.</tr>
                    <tr>Shown just down the task list, Inline Tomato Clock makes it easy to check 
                    your task with clock counting. </tr>
                    <tr>However, if you want to enjoy your concentration without any interuption.
                    Leaving other tasks alone is a wise choice.</tr>
                    <tr>So, why not jump to the clock page and enjoy your own time :)</tr>

                </p>
                <p>
                    <li>Disable Pause Option of the Tomato Clock</li>
                    <tr>Restrict Mode will disable the Pause Option of the Tomato (Count Down) Clock.</tr>
                    <tr>In fact, according to the policy of Tomato Work Method, pause is even not allowed.</tr>
                    <tr>So, if you sruely wanna pause, just reset and start again.</tr>
                </p>


                <label><li>Encourage Mode</li></label>
                <p>
                    <tr>If there were no bosses patroling around, </tr>
                    <tr>everyone would be happy showing off the fact 
                    of finishing work ahead of scheduled time.</tr>
                    <tr>To be honest, I am not rich enough to store your data on the cloud 
                    without selling them to your managers.</tr>
                    <tr>However, my coding level surely sucks, which will guarantee your privacy safety
                     because I have no ability to store data online.</tr>
                    <tr>So, you should feel lucky and keep the switch on. Feel free 
                    to tap the switch if you finish your work in advance.</tr>
                    <tr>The checkbox will turn green as encouragement.</tr>

                </p>
                <h4>To Do</h4>
                <p>
                    <tr>Add your item to start.</tr>
                    <tr>Click at the task to see its propotions and edit it.</tr>
                    <tr>You can set tomato clock time to each task use interactive tomato clock.</tr>
                </p>
                <h4>Online Mode</h4>
                <p>
                    <tr>Online Mode will store data on the database provided by firebase</tr>
                    <tr>Offline Mode and Online Mode are seperatted</tr>
                    <tr>OlineMode won't send your offline mode data to the database, at the same time
                        you won't fetch offline data from online
                    </tr>
                </p>
                <hr/>
                <dd>Designed by HYY at BUPT</dd>
                <br/>
            </div>
        );
    }
}

export default About;