import  React, {Component, PropTypes} from 'react';

const DEFAULT_HEIGHT = 300;
const DEFAULT_WIDTH = 600;

export default class DataDogGraphEmbed extends Component {

    static propTypes = {
        graph: PropTypes.string.isRequired,
        height: PropTypes.number,
        width: PropTypes.number,
        legend: PropTypes.bool
    };

    render() {
        const {graph, height = DEFAULT_HEIGHT, width = DEFAULT_WIDTH, legend = true} = this.props;
        return (
            <iframe
                src={`https://app.datadoghq.com/graph/embed?token=${graph}&height=${height}&width=${width}&legend=${legend}`}
                width={width} height={height} frameBorder="0"></iframe>
        )
    }
}
