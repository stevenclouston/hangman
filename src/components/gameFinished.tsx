import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    RESET_GAME,
    START_GAME_ASYNC
} from '../constants/actionTypes';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import { GAME_FINISHED, START_PAGE } from '../constants/pages';
import { WINNER } from '../constants/gameStatus';
import GameResult from './gameResult';

interface Props {
    app: any;
    gameContext: any;
    resetGame: any;
}

class GameFinished extends Component<Props> {
    selectPlayButtonClick = () => {
        this.props.resetGame();
    };

    render() {
        const buttons = (
            <Fade
                {...{ timeout: { enter: 2500, exit: 0 } }}
                in={this.props.app.page === GAME_FINISHED ? true : false}
                mountOnEnter
                unmountOnExit
            >
                <div className="container">
                    <GameResult />
                    <Button
                        variant="outlined"
                        component="span"
                        className={'teamText'}
                        onClick={this.selectPlayButtonClick}
                        style={{ margin: 10 }}
                    >
                        Play Again
                    </Button>
                </div>
            </Fade>
        );

        if (!this.props.gameContext.usersTeam) {
            return buttons;
        }

        return null;
    }
}

const mapStateToProps = (state: any) => ({
    gameContext: state.gameContext,
    app: state.app
});

const mapDispatchToProps = (dispatch: any) => ({
    resetGame: () => {
        dispatch({ type: RESET_GAME });
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameFinished);
