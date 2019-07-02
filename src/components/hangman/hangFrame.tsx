import * as React from "react";
import { connect } from 'react-redux';
import '../../assets/css/hangman.scss';

class HangFrame extends React.Component {
  render() {
    const borderWidth: number = 8;

    return (
      <div style={{position: 'absolute', height: '100%', width: '100%', top: 0, left: 0}}>
        <div className="frame" style={{ width: '41%', marginLeft: '10%', height: `${borderWidth}%`}}/>
        <div className="frame" style={{ width: `${borderWidth}%`, marginLeft: '10%', height: '75%'}}/>
        <div className="frame" style={{ width: '50%', height: `${borderWidth}%`}}/>
      </div>
    )
  }

}

export default HangFrame;
