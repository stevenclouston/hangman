import * as React from 'react';
import { connect } from 'react-redux';
import Key from './key';

interface Props {
  keyboard?: any;
}

interface State {}

class Keyboard extends React.Component<Props, State> {
  render() {
    const alphabet: string[] = this.props.keyboard.letters.split('');

    return (
      <div>
        <div>
          {alphabet.map((x: string) => (
            <Key keyLetter={x} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  keyboard: state.keyboard
});

export default connect(
  mapStateToProps,
  null
)(Keyboard);
