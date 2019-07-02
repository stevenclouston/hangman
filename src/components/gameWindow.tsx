import * as React from "react";
import { connect } from 'react-redux';
import '../assets/css/gameWindow.scss';


class GameWindow extends React.Component {
    render() {

        return (
            <div className="gameWindow">
                {this.props.children}
            </div>
        )
    }

}

export default GameWindow;