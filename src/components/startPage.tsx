import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import { START_PAGE } from '../constants/pages';
import { START_GAME_ASYNC } from '../constants/actionTypes';

interface Props {
  app: any;
  startGame: any;
}

class StartPage extends Component<Props> {
  selectPlayButtonClick = () => {
    this.props.startGame();
  };

  render() {
    return (
      <Fade
        {...{ timeout: { enter: 2500, exit: 0 } }}
        in={this.props.app.page === START_PAGE ? true : false}
        mountOnEnter
        unmountOnExit
      >
        <div className="container">
          <h1>Hangman</h1>
          <Button
            variant="outlined"
            component="span"
            className={'teamText'}
            onClick={this.selectPlayButtonClick}
            style={{ margin: 10 }}
          >
            Play
          </Button>
        </div>
      </Fade>
    );
  }
}

const mapStateToProps = (state: any) => ({
  app: state.app
});

const mapDispatchToProps = (dispatch: any) => ({
  startGame: () => {
    dispatch({ type: START_GAME_ASYNC });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartPage);
