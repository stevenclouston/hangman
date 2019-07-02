import React, { Component } from 'react';
import { connect } from 'react-redux';
import Fade from '@material-ui/core/Fade';
import { START_PAGE } from '../constants/pages';

interface Props
{
    app: any
}

class Title extends Component<Props> {
    render() {

        const title = (
            <Fade
                {...{ timeout: { enter: 100, exit: 0 } }}
                in={this.props.app.page === START_PAGE ? true : false }
                mountOnEnter
                unmountOnExit
            >
                <h1>Hangman</h1>
            </Fade>
        );

        return title;
    }
}

const mapStateToProps = (state: any, ownProps: any) => ({
    app: state.app
});

export default connect(
    mapStateToProps,
    null
)(Title);
