import React from 'react';
import Axios from 'axios';
import { RadialGauge } from 'react-canvas-gauges';

class ServoSteering extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            escSteerings: [], // Initialize empty escSteering
            escSteeringIndex: 0,
            error: ''
        }
        this.changeSteering = this.changeSteering.bind(this);
    }

    changeSteering() {
        this.setState(({escSteeringIndex}) => {
            // console.log("18. escSteeringIndex: ", escSteeringIndex);
            // console.log("19. this.state.escSteering.length:", this.state.escSteerings.length);
            let nextSteeringIndex = ++escSteeringIndex % this.state.escSteerings.length;
            return { escSteeringIndex: nextSteeringIndex};
        }, () => {
            this.timeout = setTimeout(
                this.changeSteering,
                this.props.fps * 1000
            );
        });
    }

    // Convert Rad/sec^2 to Deg/sec^2
    convertRadToDegPerS2(steeringRadPerSecSq) {
        //1 deg/s^2 = 0.0174 rad/s^2
        //console.log("32. steeringRadPerSecSq: ", steeringRadPerSecSq);
        const degPerSecSqEquivalent = 0.0174532925;
        const steeringDegPerSecSq = Math.floor(steeringRadPerSecSq * (1/degPerSecSqEquivalent));
        //console.log("35. steeringDegPerSecSq: ", steeringDegPerSecSq);
        return steeringDegPerSecSq;
    }

    async getSteeringAngles() {
        try {
            let sensorDevice = this.props.sensorDevice;
            let res = await Axios.get('/api/sensor/' + sensorDevice);
            // console.log('42. Steering RESPONSE', res);

            let escSteerings = res.data;
            // console.log('45. escSteering: ', escSteerings);

            // Extract value from string key value, then store into array
            let escSteeringCleaned = []; 
            let steeringAnglesDSecSq = []; //Store Steering Angle conversions
            for(let i = 0; i < escSteerings.length; i++) {
                let split = escSteerings[i].split(':');
                escSteeringCleaned[i] = split[1].trim();
                steeringAnglesDSecSq[i] = this.convertRadToDegPerS2(escSteeringCleaned[i]);
            }

            // console.log("57. steeringAnglesDSecSq: ", steeringAnglesDSecSq);
            this.setState({
                escSteerings: steeringAnglesDSecSq, error: ''
            });
        } catch(e) {
            this.setState({ error: `BRUTAL FAILURE: ${e}`});
        }
    }

    componentDidMount() {
        this.getSteeringAngles(); // Uses Axios to fetch intial steering data from Express.js
        this.timeout = setTimeout(
            this.changeSteering,
            this.props.fps * 1000
        );
    }

    componentWillUnmount() {
        if(this.timeout) {
            clearTimeout(this.timeout);
        }
    }

    render() {
        return(
            <RadialGauge
            width="300"
            height="300"
            units="deg/s^2"
            title="SteeringAngle"
            value={this.state.escSteerings[this.state.escSteeringIndex]}
            minValue={0}
            maxValue={80}
            majorTicks={['0', '10', '20', '30', '40', '50', '60', '70', '80']}
            minorTicks={5}
            strokeTicks="true"
            highlights='[{"from": 0, "to": 50, "color": "rgba(0, 255, 0, .15)"},
                         {"from": 50, "to": 60, "color": "rgba(0, 0, 255, .25)"}]'
            colorMajorTicks="#f5f5f5"
            colorMinorTicks="#ddd"
            colorTitle="#fff"
            colorUnits="#ccc"
            colorNumbers="#37FDFC"
            colorPlate="#222"
            borderShadowWidth="0"
            borders="true"
            needleType="arrow"
            needleWidth="2"
            needleCircleSize="7"
            needleCircleOuter="true"
            needleCircleInner="false"
            animationDurection="1500"
            animationRule="linear"
            colorBorderOuter="#333"
            colorBorderOuterEnd="#111"
            colorBorderMiddle="#222"
            colorBorderMiddleEnd="#111"
            colorBorderInner="#111"
            colorBorderInnerEnd="#333" 
            colorNeedleShadowDown="#333"
            colorNeedleCircleOuter="#333" 
            colorNeedleCircleOuterEnd="#111"
            colorNeedleCircleInner="#111" 
            colorNeedleCircleInnerEnd="#222"
            valueBoxBorderRadius="0"
            colorValueBoxRect="#222"
            colorValueBoxRectEnd="#333"
          ></RadialGauge>            
        );
    }
}

export default ServoSteering;