import React, { Component } from 'react';
import { connect } from 'react-redux';
import Fade from '@material-ui/core/Fade';
import { START_PAGE } from '../constants/pages';
import { WINNER } from '../constants/gameStatus';

interface Props {
  gameContext?: any;
}

class GameResult extends Component<Props> {
  render() {
    const winner = <h1>You Won!</h1>;

    const loser = <h1>Game Over</h1>;

    return (
      <div>{this.props.gameContext.gameStatus === WINNER ? winner : loser}</div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  gameContext: state.gameContext
});

export default connect(
  mapStateToProps,
  null
)(GameResult);
