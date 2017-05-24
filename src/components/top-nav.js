import React from 'react';
import {connect} from 'react-redux';

import {newGame, toggleInfoModal} from '../actions';

import './top-nav.css';

export class TopNav extends React.Component {
    newGame(event) {
        event.preventDefault();
        this.props.dispatch(newGame());
    }

    toggleInfoModal(event) {
        event.preventDefault();
        this.props.dispatch(toggleInfoModal());
    }

    render() {
        return (
            <nav>
                <ul className="clearfix">
                    <li>
                        <a className="what" aria-label="How to play" href="#modal" onClick={e => this.toggleInfoModal(e)}>
                            What?
                        </a>
                    </li>
                    <li>
                        <a className="new" aria-live="Start a new game" href="#feedback" onClick={e => this.newGame(e)}>
                            + New Game
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
};

export default connect()(TopNav);
