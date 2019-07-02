import * as React from "react";
import { connect } from 'react-redux';
import '../../assets/css/hangman.scss';

interface Props {
  side: string;
  style?: any;
}

interface State {
}

class Leg extends React.Component<Props, State> {

  floatSide = (): any => {
    return this.props.side === "left" ? "left" : "none"
  }

  marginCalc = (): string => {
    return this.props.side === "left" ? "0%" : "50%"
  }

  legClass = (): string => {
    return this.props.side === "left" ? "leftLeg" : "rightLeg"
  }

  render() {
    const borderWidth: number = 8;

    return (
      <div className="legPlaceholder" style={{...this.props.style, marginLeft: this.marginCalc(), float: this.floatSide() }}>
        <div className={this.legClass()}/>
      </div>
    )
  }

}

export default Leg;

