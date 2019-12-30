const express = require('express');
const path = require('path');
const fs = require('fs');

// Base direcotry path for server.js since it is projet root
const appDirFromRoot = path.dirname(require.main.filename);

// Set path from which frontend can be served static assets of lidar data
const staticAssetsLidarPath = 'output/sensors/cw_rs_tl/012919/lidar/';

let lidarFrames = [];
lidarFrames = fs.readdirSync(appDirFromRoot + "/src/assets/data/output/sensors/cw_rs_tl/012919/lidar/");
for(let i = 0; i < lidarFrames.length; i++) {
    lidarFrames[i] = staticAssetsLidarPath + lidarFrames[i];
}

const lidarRouter = express.Router();

// Created route for lidarRouter that'll send all lidarFrames for a GET Request
lidarRouter.get('/', (req, res, next) => {
    res.send(lidarFrames);
});

// Created route for lidarRouter that'll send a lidarFrame for a GET Request
lidarRouter.get('/:id', (req, res, next) => {
    const lidarFrame = lidarFrames[req.params.id];
    if(lidarFrame) {
        res.send(lidarFrame);
    }
    else {
        res.status(404).send();
    }
});

module.exports = lidarRouter;