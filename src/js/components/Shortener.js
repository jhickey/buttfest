import  React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {shortenUrl} from '../actions/ShortenerActions';
@connect(state => ({
    shorten: state.shorten
}), {shortenUrl})
export default class Shortener extends Component {

    static propTypes = {
        shorten: PropTypes.object,
        shortenUrl: PropTypes.func
    };

    constructor() {
        super();
        this.state = {
            originalUrl: ''
        };
    }

    handleShortenUrl() {
        const {originalUrl} = this.state;
        const {shortenUrl} = this.props;
        shortenUrl(originalUrl);
    }

    handleUrlChange(el) {
        this.setState({
            originalUrl: el.target.value
        });
    }

    renderShortenedUrl() {
        const {shorten} = this.props;
        if (shorten.loading) {
            return 'Loading';
        } else if (shorten.loaded) {
            return shorten.data;
        } else if (shorten.failure) {
            return (
                <div className="error">
                    An error occurred!: {shorten.error.message}
                </div>
            );
        }
        return '';
    }

    render() {
        return (
            <div>
                <h3>Enter URL</h3>
                <input
                    onChange={::this.handleUrlChange}
                />
                <button type="button" onClick={::this.handleShortenUrl}>Shorten</button>
                <div>{this.renderShortenedUrl()}</div>
            </div>
        )
    }
}