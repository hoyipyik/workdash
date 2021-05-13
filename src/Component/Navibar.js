import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//导航栏component
class Navibar extends Component {

    render() {
        return (
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>
                            {/* 用react-route-dom的Link路由对应的位置 */}
                                <Link to="/workdash">
                                    To do
                                </Link>
                            </th>
                            {/* <th>
                                暂时移除的功能
                                <Link to="/board">
                                    Board
                                </Link>
                            </th> */}
                            <th>
                                <Link to="/clock">
                                    Clock
                                </Link>
                            </th>
                            <th>
                                <Link to="/settings">
                                    Setting
                                </Link>
                            </th>
                            <th>
                                <Link to="/about">
                                    About
                                </Link>
                            </th>
                        </tr>
                    </thead>
                </table>
            </div>
        );
    }
}

export default Navibar;