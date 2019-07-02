import * as React from 'react';
import { connect } from 'react-redux';

interface Props {
  style?: any;
}

class Head extends React.Component<Props> {
  render() {
    const borderWidth: number = 8;

    return (
      <div
        className="hangman"
        style={{
          ...this.props.style,
          width: '15%',
          marginLeft: '42.5%',
          height: '15%',
          borderRadius: '50%'
        }}
      />
    );
  }
}

export default Head;
