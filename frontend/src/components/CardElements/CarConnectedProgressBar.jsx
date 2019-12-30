import React from 'react';
import { Progress, Table } from 'reactstrap';

//blue progress bar for loading
//green when loaded successful
//red when loaded failed

class CarConnectedProgressBar extends React.Component {
    render() {
        return (
            <div>
                <div className="text-center">50% Overall</div>
                <Progress animated color="success" value={50} >Car Connecting to Telemetry</Progress>
                <Table responsive>
                    <thead>
                      <tr>
                        <th>Hardware Device</th>
                        <th>Status</th>
                        <th>Message</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Jetson TX2</td>
                        <td>
                            <Progress animated color = "info" value = {50}>
                                50%
                            </Progress>
                        </td>
                        <td>Connecting</td>
                      </tr>
                      <tr>
                        <td>Logitech C930</td>
                        <td>
                            <Progress animated color = "info" value = {50}>
                                50%
                            </Progress>                            
                        </td>
                        <td>Connecting</td>
                      </tr>
                      <tr>
                        <td>Hokuyo UST-10LX</td>
                        <td>
                            <Progress animated color = "info" value = {50}>
                                50%
                            </Progress>                             
                        </td>
                        <td>Connecting</td>
                      </tr> 
                      <tr>
                        <td>Sparkfun 9DOF Razor IMU</td>
                        <td>
                            <Progress animated color = "info" value = {50}>
                                50%
                            </Progress>                             
                        </td>
                        <td>Connecting</td>
                      </tr>   
                      <tr>
                        <td>Enertion Focbox v1.7</td>
                        <td>
                            <Progress animated color = "info" value = {50}>
                                50%
                            </Progress>                             
                        </td>
                        <td>Connecting</td>                        
                      </tr>                                                              
                      <tr>
                        <td>Energizer 18000</td>
                        <td>
                            <Progress animated color = "info" value = {50}>
                                50%
                            </Progress>                             
                        </td>
                        <td>Connecting</td>                          
                      </tr>
                      <tr>
                        <td>Traxxas 2923 NiMH</td>
                        <td>
                            <Progress animated color = "info" value = {50}>
                                50%
                            </Progress>                             
                        </td>
                        <td>Connecting</td>                          
                      </tr>
                    </tbody>
                </Table>                
            </div>
        );
    }
}



export default CarConnectedProgressBar;