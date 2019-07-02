import * as React from 'react';
import { connect } from 'react-redux';

interface Props {
  style?: any;
}

class HangRope extends React.Component<Props> {
  render() {
    const borderWidth: number = 8;

    return (
      <div
        className={'hangman'}
        style={{
          ...this.props.style,
          width: `2%`,
          marginLeft: `49%`,
          height: '15%'
        }}
      />
    );
  }
}

export default HangRope;
