import React from 'react';
import {connect} from 'react-redux';

import {generateAuralUpdate, restartGame} from '../actions';

import './top-nav.css';

export function TopNav(props) {
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a href="#what" className="what" aria-label="How to play">
                        What?
                    </a>
                </li>
                <li>
                    <a
                        href="#feedback"
                        className="new"
                        aria-label="Start a new game"
                        onClick={() =>
                            props.dispatch(
                                restartGame(Math.floor(Math.random() * 100) + 1)
                            )}>
                        + New Game
                    </a>
                </li>
                <li>
                    <a
                        href="#get-status"
                        /* the `visuallyhidden` class hides an element 
            while leaving it available to screen reader users  */
                        className="visuallyhidden focusable status-link"
                        onClick={() => props.dispatch(generateAuralUpdate())}>
                        Hear state of game
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default connect()(TopNav);
