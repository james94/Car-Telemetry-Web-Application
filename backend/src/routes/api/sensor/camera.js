const express = require('express');
const path = require('path');
const fs = require('fs');

// Base directory path for server.js since it is project root
const appDirFromRoot = path.dirname(require.main.filename);

// Set path from which frontend can be served static assets of camera data
const staticAssetsCameraPath = 'input/sensors/cw_rs_tl/012919/cam_frames/'

let cameraFrames = [];
cameraFrames = fs.readdirSync(appDirFromRoot + "/src/assets/data/input/sensors/cw_rs_tl/012919/cam_frames/");
for(let i = 0; i < cameraFrames.length; i++) {
    cameraFrames[i] = staticAssetsCameraPath + cameraFrames[i];
}

const cameraRouter = express.Router();

// Created route for cameraRouter that'll send all cameraFrames for a GET request
cameraRouter.get('/', (req, res, next) => {
    res.send(cameraFrames);
});

// Created route for cameraRouter that'll send a cameraFrame for a GET request
// When a GET /cameraRouter/1 request arrives,
// cameraRouter.get('/:id') matches full path /cameraRouter/1
// so, the callback is invoked and cameraFrame with index id is fetched from 
// cameraFrames array and sent back
cameraRouter.get('/:id', (req, res, next) => {
    const cameraFrame = cameraFrames[req.params.id];
    if(cameraFrame) {
        res.send(cameraFrame);
    }
    else {
        res.status(404).send();
    }
});

module.exports = cameraRouter;