import React from 'react';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Col,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Table
} from "reactstrap";

// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// function that returns a color based on an interval of numbers

import {
    dashboardPanelChart,
    dashboardShippedProductsChart,
    dashboardAllProductsChart,
    dashboard24HoursPerformanceChart
} from "variables/charts.jsx";

import { PanelHeader, Stats, CardCategory, Tasks } from "components";
import DisplayAnImage from "../Util/DisplayAnImage";
import PlayVideoFromImages from "../Util/PlayVideoFromImages";
import Speedometer from "../Util/Speedometer";
import ServoSteering from "../Util/ServoSteering";
import SimulateImuData from "../Util/SimulateImuData";

import CarConnectedProgressBar from "components/CardElements/CarConnectedProgressBar";

import { tasks } from "variables/general.jsx";

class Sensors extends React.Component {
    render() {
        return (
            <div>
            <PanelHeader
              size="lg"
              content={<img src="input/other/hortonworksraceway.jpg" alt="Cloudera Raceway" width={(100*1)+'%'} height={(100*1.2)+'%'} />}
            />
            <div className="content">
              <Row>
                <Col xs={12} md={6}>
                  <Card className="card-chart">
                    <CardHeader>
                      <CardCategory>Camera Visual Perception</CardCategory>
                      <CardTitle tag="h4">Camera: Logitech C930</CardTitle>
                    </CardHeader>
                    <CardBody className="text-center"> 
                      <PlayVideoFromImages fps={0.5} sensorDevice="camera/" alt="Camera CW_RS_TL Video" height={(100)+'%'} width={(100)+'%'} />
                    </CardBody>
                    <CardFooter>
                      <Stats>
                        {[
                          {
                            i: "now-ui-icons arrows-1_refresh-69",
                            t: "Just Updated"
                          }
                        ]}
                      </Stats>
                    </CardFooter>
                  </Card>
                </Col>                       
                <Col xs={12} md={6}>
                  <Card className="card-chart">
                    <CardHeader>
                      <CardCategory>LiDAR Mapping Environment</CardCategory>
                      <CardTitle tag="h4">
                        LiDAR: Hokuyo UST-10LX
                      </CardTitle>
                    </CardHeader>
                    <CardBody className="text-center">
                      <PlayVideoFromImages fps={0.5} sensorDevice="lidar/" height={(100*0.84)+'%'} width={(100*0.84)+'%'} />
                    </CardBody>
                    <CardFooter>
                      <Stats>
                        {[
                          {
                            i: "now-ui-icons arrows-1_refresh-69",
                            t: "Just Updated"
                          }
                        ]}
                      </Stats>
                    </CardFooter>
                  </Card>
                </Col>                   
              </Row>
              <Row>
                <Col xs={12} md={4}>
                  <Card className="card-tasks">
                    <CardHeader>
                      <CardCategory>ESC Servo Steering Angle</CardCategory>
                      <CardTitle tag="h4">ESC: Enertion Focbox v1.7</CardTitle>
                    </CardHeader>
                    <CardBody className="text-center">
                        <ServoSteering fps={0.5} sensorDevice="esc_steering/" />
                    </CardBody>
                    <CardFooter>
                      <hr />
                      <Stats>
                        {[
                          {
                            i: "now-ui-icons loader_refresh spin",
                            t: "Updated 3 minutes ago"
                          }
                        ]}
                      </Stats>
                    </CardFooter>
                  </Card>
                </Col>                
                <Col xs={12} md={4}>
                  <Card className="card-tasks">
                    <CardHeader>
                      <CardCategory>IMU Rotational Tracking</CardCategory>
                      <CardTitle tag="h4">Sparkfun 9DOF Razor IMU</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <SimulateImuData fps={0.5} sensorDevice="imu/" />
                    </CardBody>
                    <CardFooter>
                      <hr />
                      <Stats>
                        {[
                          {
                            i: "now-ui-icons loader_refresh spin",
                            t: "Updated 3 minutes ago"
                          }
                        ]}
                      </Stats>
                    </CardFooter>
                  </Card>
                </Col>
                <Col xs={12} md={4}>
                  <Card className="card-tasks">
                    <CardHeader>
                      <CardCategory>ESC Motor Wheel Speed</CardCategory>
                      <CardTitle tag="h4">ESC: Enertion Focbox v1.7</CardTitle>
                    </CardHeader>
                    <CardBody className="text-center">
                        <Speedometer fps={0.5} sensorDevice="esc_speed" />
                    </CardBody>
                    <CardFooter>
                      <hr />
                      <Stats>
                        {[
                          {
                            i: "now-ui-icons loader_refresh spin",
                            t: "Updated 3 minutes ago"
                          }
                        ]}
                      </Stats>
                    </CardFooter>
                  </Card>
                </Col>                                   
              </Row>                                      
            </div>
          </div>            
        );
    }
}

export default Sensors;