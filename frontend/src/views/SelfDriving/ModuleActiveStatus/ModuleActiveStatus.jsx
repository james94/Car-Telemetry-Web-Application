import React from 'react';
import { Progress, Button, Table } from 'reactstrap';

//blue progress bar for loading
//green when loaded successful
//red when loaded failed

class ModuleActiveStatus extends React.Component {
    render() {
        return (
            <div>
                <Button color="info" style={{fontSize:"20px"}}>Enable All Skills</Button>
                <Table responsive>
                    <thead>
                      <tr>
                        <th>Skill</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td style={{fontSize:"20px"}}>Lane-Detection</td>
                        <td><Button color="danger" style={{fontSize:"20px"}}>Disabled</Button></td>
                      </tr>                      
                      <tr>
                        <td style={{fontSize:"20px"}}>Lane-Curvature</td>
                        <td><Button color="danger" style={{fontSize:"20px"}}>Disabled</Button></td>
                      </tr>
                      <tr>
                        <td style={{fontSize:"20px"}}>Behavior-Cloning</td>
                        <td><Button color="danger" style={{fontSize:"20px"}}>Disabled</Button></td>
                      </tr>
                      <tr>
                        <td style={{fontSize:"20px"}}>Kalman-Filter</td>
                        <td><Button color="danger" style={{fontSize:"20px"}}>Disabled</Button></td>
                      </tr> 
                      <tr>
                        <td style={{fontSize:"20px"}}>Localization</td>
                        <td><Button color="danger" style={{fontSize:"20px"}}>Disabled</Button></td>
                      </tr>   
                      <tr>
                        <td style={{fontSize:"20px"}}>Path-Planning</td>
                        <td><Button color="danger" style={{fontSize:"20px"}}>Disabled</Button></td>                        
                      </tr>
                    </tbody>
                </Table>                
            </div>
        );
    }
}



export default ModuleActiveStatus;