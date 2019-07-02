import React, { Component } from 'react';
import { connect } from 'react-redux';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import GameWindow from './gameWindow';
import { GAME_IN_PROGRESS } from '../constants/pages';
import { RESET_GAME } from '../constants/actionTypes';

interface Props
{
    page? : string
}

export class GameHandler extends Component<Props> {
    render() {

        const boardLayout = (
            <Fade
                {...{ timeout: { enter: 1000, exit: 0 } }}
                in={this.props.page === GAME_IN_PROGRESS ? true : false}
                mountOnEnter
                unmountOnExit
            >
                <div>
                    <GameWindow>

                    </GameWindow>
                </div>
            </Fade>
        );

        return boardLayout;
    }
}

const mapStateToProps = (state: any) => ({
    page: state.app.page
});

export default  connect(
    mapStateToProps,
    null
)(GameHandler);
