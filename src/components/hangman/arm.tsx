import * as React from 'react';
import { connect } from 'react-redux';

interface Props {
  side: string;
  style?: any;
}

interface State {}

class Arm extends React.Component<Props, State> {
  floatSide = (): any => {
    return this.props.side === 'left' ? 'left' : 'none';
  };

  marginCalc = (): string => {
    return this.props.side === 'left' ? '30%' : '50%';
  };

  armClass = (): string => {
    return this.props.side === 'left' ? 'leftArm' : 'rightArm';
  };

  render() {
    const borderWidth: number = 8;

    return (
      <div
        className="armPlaceholder"
        style={{
          ...this.props.style,
          marginLeft: this.marginCalc(),
          float: this.floatSide()
        }}
      >
        <div className={`${this.armClass()}`} />
      </div>
    );
  }
}

export default Arm;
