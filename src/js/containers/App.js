import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as CounterActions from '../actions/CounterActions';
import Header from '../components/Header';
import Grill from '../components/Grill';
import DataDogGraphEmbed from '../components/DataDogGraphEmbed';
import io from 'socket.io-client';
import {Grid, Row, Col} from 'react-bootstrap';


const socket = io.connect(process.env.API_HOST);

/**
 * It is common practice to have a 'Root' container/component require our main App (this one).
 * Again, this is because it serves to wrap the rest of our application with the Provider
 * component to make the Redux store available to the rest of the app.
 */
class App extends Component {

    constructor() {
        super();
        this.state = {
            temperature: 0,
            connected: true
        };
        socket.on('temperature', ({temperature}) => {
            this.setState({
                temperature
            });
        });
        socket.on('connect_error', e => {
            this.setState({
                connected: false
            });
        });
        socket.on('reconnect', e => {
            this.setState({
                connected: true
            });
        })
    }

    render() {
        const {counter, actions} = this.props;
        return (
            <div className="main-app-container">
                <Header/>
                <Grid>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <Grill
                                temperature={this.state.temperature}
                                connected={this.state.connected}
                            />
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <DataDogGraphEmbed
                                token="d607edc351227cf081c1f560fade86936c6912ddeff8c3f51b9b81ed1c50c47d"
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

App.propTypes = {
    counter: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired
};

/**
 * Keep in mind that 'state' isn't the state of local object, but your single
 * state in this Redux application. 'counter' is a property within our store/state
 * object. By mapping it to props, we can pass it to the child component Counter.
 */
function mapStateToProps(state) {
    return {
        counter: state.counter
    };
}

/**
 * Turns an object whose values are 'action creators' into an object with the same
 * keys but with every action creator wrapped into a 'dispatch' call that we can invoke
 * directly later on. Here we imported the actions specified in 'CounterActions.js' and
 * used the bindActionCreators function Redux provides us.
 *
 * More info: http://redux.js.org/docs/api/bindActionCreators.html
 */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(CounterActions, dispatch)
    };
}

/**
 * 'connect' is provided to us by the bindings offered by 'react-redux'. It simply
 * connects a React component to a Redux store. It never modifies the component class
 * that is passed into it, it actually returns a new connected componet class for use.
 *
 * More info: https://github.com/rackt/react-redux
 */

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
