const express = require('express');
const path = require('path');
const fs = require('fs');

const appDirFromRoot = path.dirname(require.main.filename);

const staticAssetsImuPath = 'input/sensors/cw_rs_tl/012919/imu_data/';
const imuFilepath = 'src/assets/data/input/sensors/cw_rs_tl/012919/imu_data/';

let filenames = [];
let imu = [];
filenames = fs.readdirSync(appDirFromRoot + '/' + imuFilepath);
for(let i = 0; i < filenames.length; i++) {
    fs.readFile((imuFilepath + filenames[i]), 'utf8', (err, data) => {
        if(err) throw err;
        imu[i] = data;
    });
}

const imuRouter = express.Router();

// Created route for imuRouter that'll send all imu array for a GET Request
imuRouter.get('/', (req, res, next) => {
    // console.log(imu);
    res.send(imu);
});

// Created route for imuRouter that'll send a element from imu array for a GET Request
imuRouter.get('/:id', (req, res, next) => {
    const imuElement = imu[req.params.id];
    if(imuElement) {
        res.send(imuElement);
    }
    else {
        res.status(404).send();
    }
});

module.exports = imuRouter;