import React from "react";
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

import { PanelHeader, Stats, CardCategory, Tasks } from "components";

import CarConnectedProgressBar from "components/CardElements/CarConnectedProgressBar";

import {
  dashboardPanelChart,
  dashboardShippedProductsChart,
  dashboardAllProductsChart,
  dashboard24HoursPerformanceChart
} from "variables/charts.jsx";

import { tasks } from "variables/general.jsx";

class Dashboard extends React.Component {
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
                  <CardCategory>Car Diagram</CardCategory>
                  <CardTitle tag="h4">E2AI-Car-SDV1</CardTitle>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      className="btn-round btn-simple btn-icon"
                      color="default"
                    >
                      <i className="now-ui-icons loader_gear" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Nvidia Jetson TX2</DropdownItem>
                      <DropdownItem>Logitech C930</DropdownItem>
                      <DropdownItem>Hokuyo UST-10LX</DropdownItem>
                      <DropdownItem>Sparkfun 9DOF Razor IMU</DropdownItem>
                      <DropdownItem>Enertion Focbox v1.7</DropdownItem>
                      <DropdownItem>Energizer 18000</DropdownItem>
                      <DropdownItem>Traxxas 2923 NiMH</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>

                  <img src="input/other/mit_racecar.jpg" alt="E2AI-Car-SDV1" alt="Cloudera Racecar" height={(100)+'%'} width={(100)+'%'} />
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
                  <CardCategory>Connected Car</CardCategory>
                  <CardTitle tag="h4">
                    {/*Press button, onClick, pass flag to ConnectionStatus Component
                    which returns a green button with word changed to Connected
                    or a red button for Failed, Retry. */}
                    <Button color="info">Connect</Button>
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <CarConnectedProgressBar />
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
            <Col xs={12} md={6}>
              <Card className="card-tasks">
                <CardHeader>
                  <CardCategory>Car Demo</CardCategory>
                  <CardTitle tag="h4">Hardware Checklist</CardTitle>
                </CardHeader>
                <CardBody>
                  <Tasks tasks={tasks} />
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
            <Col xs={12} md={6}>
              <Card>
                <CardHeader>
                  <CardCategory>Vechicle Information</CardCategory>
                  <CardTitle tag="h4">Vehicle Information</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className=" text-primary">
                      <tr>
                        <th>Name</th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Year</td>
                        <td>2019</td>
                      </tr>
                      <tr>
                        <td>Model</td>
                        <td>E2AI-Car-SDV1</td>
                      </tr>
                      <tr>
                        <td>Perception Battery</td>
                        <td>Energizer 18000</td>
                      </tr>                      
                      <tr>
                        <td>ECU</td>
                        <td>Nvidia Jetson TX2</td>
                      </tr>        
                      <tr>
                        <td>Camera</td>
                        <td>Logitech C9305</td>
                      </tr>    
                      <tr>
                        <td>LiDAR</td>
                        <td>Hokuyo UST-10LX</td>
                      </tr>  
                      <tr>
                        <td>IMU</td>
                        <td>Sparkfun 9DOF Razor IMU</td>
                      </tr>
                      <tr>
                        <td>ESC Battery</td>
                        <td>Traxxas 2923 NiMH</td>
                      </tr>
                      <tr>
                        <td>ESC</td>
                        <td>Enertion Focbox v1.7</td>
                      </tr>                                                                                                
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Dashboard;
