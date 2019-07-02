import * as React from "react";
import { connect } from 'react-redux';

interface Props
{
 style?: any
}

class HangmanBody extends React.Component<Props> {
  render() {
    const borderWidth: number = 8;

    return (
      <div style={{ ...this.props.style, position: 'relative', height: '20%', width: '100%' }}>
        <div className="hangman"
          style={{
            zIndex: 10,
            position: 'absolute',
            width: `${borderWidth}%`,
            height: '100%',
            marginLeft: `${50 - (borderWidth / 2)}%`
          }}
        />
        {this.props.children}
      </div>
    )
  }

}

export default HangmanBody;