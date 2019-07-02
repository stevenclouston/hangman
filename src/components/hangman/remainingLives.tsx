import * as React from 'react';
import { connect } from 'react-redux';
import '../../assets/css/hangman.scss';

interface Props {
  livesRemaining: number;
}

interface State {}

class LivesRemaining extends React.Component<Props, State> {
  render() {
    return (
      <div className="box livesRemaining">
        <h6>Lives Remaining: {this.props.livesRemaining}</h6>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  livesRemaining: state.gameContext.livesRemaining
});

export default connect(
  mapStateToProps,
  null
)(LivesRemaining);
