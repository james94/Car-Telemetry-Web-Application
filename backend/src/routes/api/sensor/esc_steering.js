const express = require('express');
const path = require('path');
const fs = require('fs');

const appDirFromRoot = path.dirname(require.main.filename);

const staticAssetsEscSteeringPath = 'input/sensors/cw_rs_tl/012919/servo_steering/';
const escSteeringFilepath = 'src/assets/data/input/sensors/cw_rs_tl/012919/servo_steering/';

let filenames = [];
let escSteeringAngles = [];
filenames = fs.readdirSync(appDirFromRoot + '/' + escSteeringFilepath);
for(let i = 0; i < filenames.length; i++) {
    fs.readFile((escSteeringFilepath + filenames[i]), 'utf8', (err, data) => {
        if(err) throw err;
        escSteeringAngles[i] = data;
    });
}

const escSteeringRouter = express.Router();

// Created route for escSteeringRouter that'll send all escSteeringAngles for a GET Request
escSteeringRouter.get('/', (req, res, next) => {
    res.send(escSteeringAngles);
});

// Created route for escSteeringRouter that'll send a escSteeringAngle for a GET Request
escSteeringRouter.get('/:id', (req, res, next) => {
    const escSteeringAngle = escSteeringAngles[req.params.id];
    if(escSteeringAngle) {
        res.send(escSteeringAngle);
    }
    else {
        res.status(404).send();
    }
});

module.exports = escSteeringRouter;