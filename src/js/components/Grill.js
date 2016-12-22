import  React, {Component, PropTypes} from 'react';
import MonitorGraphic from './MonitorGraphic';

@MonitorGraphic
export default class Grill extends Component {

  static propTypes = {
    temperature: PropTypes.number,
    color: PropTypes.string,
    connected: PropTypes.bool
  };

  render() {
    const {color, temperature, connected} = this.props;
    return (
      <div className="monitor-svg">
        <svg width="257px" height="513px" viewBox="0 0 257 513" version="1.1" xmlns="http://www.w3.org/2000/svg"
             xmlnsXlink="http://www.w3.org/1999/xlink">
          <title>Smoker</title>
          <defs>
            <path
              d="M215.985259,359.839 C215.985259,411.725 167.835753,453.791 108.444365,453.791 C49.0480726,453.791 0.896604666,411.725 0.896604666,359.839 L0.896604666,94.847 C0.896604666,42.961 49.0480726,0.894 108.444365,0.894 C167.835753,0.894 215.985259,42.961 215.985259,94.847 L215.985259,359.839 L215.985259,359.839 Z"
              id="path-1"></path>
            <mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0"
                  width="215.088654"
                  height="452.897" fill="white">
              <use xlinkHref="#path-1"></use>
            </mask>
          </defs>
          <g id="smoker" transform="translate(-2.000000, 0.000000)">

            <g id="smoker-chamber" transform="translate(20.613739, 16.000000)" stroke="#4D4D4D"
               strokeWidth="28"
               fill={color}>
              <use id="path3552" mask="url(#mask-2)" xlinkHref="#path-1"></use>
            </g>
            <text id="327°-F" fontFamily="Helvetica" fontSize="52" fontWeight="normal" fill="#4D4D4D">
              <tspan x="58" y="231">{connected ? temperature : '??'}° F</tspan>
            </text>
            <g id="path3562-Clipped" transform="translate(86.613739, 0.000000)" fill="#4D4D4D">
              <path
                d="M0.761809786,8.643 C0.761809786,4.038 3.86531854,0.304 7.69271776,0.304 L77.1891458,0.304 C81.016545,0.304 84.1200538,4.038 84.1200538,8.643 L0.761809786,8.643 Z"
                id="path3562"></path>
            </g>
            <g id="path3564-Clipped" transform="translate(101.613739, 2.000000)" fill="#4D4D4D">
              <path
                d="M54.6108561,2.474 C54.6108561,7.988 42.4469459,12.457 27.4404413,12.457 C12.4339368,12.457 0.271007453,7.988 0.271007453,2.474 C0.271007453,-3.04 12.4339368,2.474 27.4404413,2.474 C42.4469459,2.474 54.6108561,-3.041 54.6108561,2.474"
                id="path3564"></path>
            </g>
            <g id="rect3566-Clipped" transform="translate(96.613739, 4.000000)" fill="#4D4D4D">
              <rect id="rect3566" x="0.676558976" y="0.474" width="4.59444848" height="24.842"></rect>
            </g>
            <g id="rect3568-Clipped" transform="translate(155.613739, 4.000000)" fill="#4D4D4D">
              <rect id="rect3568" x="0.610856124" y="0.474" width="4.5934676" height="24.842"></rect>
            </g>
            <g id="path3574-Clipped" transform="translate(200.613739, 364.000000)" fill="#4D4D4D">
              <path
                d="M44.4844928,1.84320026 L46.5404202,141.4802 C46.5404202,141.4802 47.6036957,150.1612 39.6870019,150.9822 C31.6006156,151.8202 28.5471318,144.0592 27.8614957,140.2862 C27.1758596,136.5142 14.8795304,76.4482003 14.8795304,76.4482003 L12.9609264,67.5622003 L18.7167384,62.3922003 L35.5751471,141.3402 C36.6717725,145.2522 40.2353146,144.8332 40.372638,141.7592 C40.5099614,138.6852 39.0023467,7.05820026 39.0023467,7.05820026 L44.4844928,1.84320026 Z"
                id="path3574"
                transform="translate(29.774509, 76.444095) rotate(-10.000000) translate(-29.774509, -76.444095) "></path>
            </g>
            <g id="path3574-Clipped"
               transform="translate(30.386261, 440.500000) scale(-1, 1) translate(-30.386261, -440.500000) translate(0.386261, 364.000000)"
               fill="#4D4D4D">
              <path
                d="M44.4844928,1.84320026 L46.5404202,141.4802 C46.5404202,141.4802 47.6036957,150.1612 39.6870019,150.9822 C31.6006156,151.8202 28.5471318,144.0592 27.8614957,140.2862 C27.1758596,136.5142 14.8795304,76.4482003 14.8795304,76.4482003 L12.9609264,67.5622003 L18.7167384,62.3922003 L35.5751471,141.3402 C36.6717725,145.2522 40.2353146,144.8332 40.372638,141.7592 C40.5099614,138.6852 39.0023467,7.05820026 39.0023467,7.05820026 L44.4844928,1.84320026 Z"
                id="path3574"
                transform="translate(29.774509, 76.444095) rotate(-10.000000) translate(-29.774509, -76.444095) "></path>
            </g>
          </g>
        </svg>
      </div>
    );
  }
}
