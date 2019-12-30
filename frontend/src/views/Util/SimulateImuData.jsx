import React from 'react';
import Axios from 'axios';
import { RadialGauge } from 'react-canvas-gauges';

class SimulateImuData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imuRecordings: [], // Initialize empty escSteering
            imuIndex: 0,
            error: ''
        }
        this.changeImu = this.changeImu.bind(this);
    }

    changeImu() {
        this.setState(({imuIndex}) => {
            // console.log("18. imuIndex: ", imuIndex);
            // console.log("19. this.state.imuRecordings.length:", this.state.imuRecordings.length);
            let nextImuIndex = ++imuIndex % this.state.imuRecordings.length;
            return { imuIndex: nextImuIndex};
        }, () => {
            this.timeout = setTimeout(
                this.changeImu,
                this.props.fps * 1000
            );
        });
    }

    // Function To Filter for Just IMU Orientation
    // extractImuOrientation(imuRecordings) {
    //     const split = imuRecording;

    //     let imuCleaned = []; 
    //     let imuOrientation = []; //Store Steering Angle conversions
    //     for(let i = 0; i < escSteerings.length; i++) {
    //         let split = imuRecordings[i][7].split(':');
    //         escSteeringCleaned[i] = split[1].trim();
    //         steeringAnglesDSecSq[i] = this.convertRadToDegPerS2(escSteeringCleaned[i]);
    //     }

    //     return ;
    // }



    async getImuRecordings() {
        try {
            let sensorDevice = this.props.sensorDevice;
            let res = await Axios.get('/api/sensor/' + sensorDevice);
            console.log('51. IMU RESPONSE', res);

            let imuRecordings = res.data;
            console.log('54. imuRecordings: ', imuRecordings);

            // Extract value from string key value, then store into array
            let imuCleaned = []; 
            let imuOrientation = []; //Store Steering Angle conversions

            this.setState({
                imuRecordings, error: ''
            });
        } catch(e) {
            this.setState({ error: `BRUTAL FAILURE: ${e}`});
        }
    }

    componentDidMount() {
        this.getImuRecordings(); // Uses Axios to fetch intial steering data from Express.js
        this.timeout = setTimeout(
            this.changeImu,
            this.props.fps * 1000
        );
    }

    componentWillUnmount() {
        if(this.timeout) {
            clearTimeout(this.timeout);
        }
    }

    render() {
        //console.log("ImuRecordings[index]: ", this.state.imuRecordings[this.state.imuIndex]);
        return(
            <p>{this.state.imuRecordings[this.state.imuIndex]}</p>
        );
    }
}

export default SimulateImuData;