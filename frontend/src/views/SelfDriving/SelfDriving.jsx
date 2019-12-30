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

import ModuleActiveStatus from "./ModuleActiveStatus/ModuleActiveStatus.jsx";

import {
  dashboardPanelChart,
  dashboardShippedProductsChart,
  dashboardAllProductsChart,
  dashboard24HoursPerformanceChart
} from "variables/charts.jsx";

import { tasks } from "variables/general.jsx";

const clouderaRacewayImg = (
	<img 
		src="https://raw.githubusercontent.com/james94/telemetry-car/dev/frontend/dashboard-react/src/assets/img/dashboard/hortonworksraceway.jpg?token=ALSrwW9hO85_gwJVkv1KlrsXTkqmQ4Gjks5cjpQHwA%3D%3D"
		alt="Cloudera Raceway"
		width={(100*1)+'%'}
		height={(100*1.2)+'%'}
	/>
);

class SelfDriving extends React.Component {
  render() {
    return (
      <div>
        <PanelHeader
          size="lg"
          content={<img src="input/other/hortonworksraceway.jpg" alt="Cloudera Raceway" width={(100*1)+'%'} height={(100*1.2)+'%'} />}
        />
        <div className="content">
          <Row>
            <Col xs={12} md={12}>
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>Self Driving Car Skills</CardCategory>
                  <CardTitle tag="h4">
                      Enable/Disable Skills
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <ModuleActiveStatus />
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
        </div>
      </div>
    );
  }
}

export default SelfDriving;
