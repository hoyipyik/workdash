import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navibar extends Component {

    render() {
        return (
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>
                                <Link to="/">
                                    To do
                                </Link>
                            </th>
                            <th>
                                <Link to="/board">
                                    Board
                                </Link>
                            </th>
                            <th>
                                <Link to="/clock">
                                    Clock
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