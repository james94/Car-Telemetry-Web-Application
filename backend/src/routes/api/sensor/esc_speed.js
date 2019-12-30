const express = require('express');
const path = require('path');
const fs = require('fs');

const appDirFromRoot = path.dirname(require.main.filename);

const staticAssetEscSpeedPath = 'input/sensors/cw_rs_tl/012919/motor_speed/'
const escSpeedFilepath = 'src/assets/data/input/sensors/cw_rs_tl/012919/motor_speed/'

let filenames = [];
let escSpeeds = [];
filenames = fs.readdirSync(appDirFromRoot + '/' + escSpeedFilepath);
for(let i = 0; i < filenames.length; i++) {
    fs.readFile((escSpeedFilepath + filenames[i]), 'utf8', (err, data) => {
        if(err) throw err;
        // Convert string into key value pair
        escSpeeds[i] = data;
    });
}

const escSpeedRouter = express.Router();

// Created route for escSpeedRouter that'll send all escSpeeds for a GET Request
escSpeedRouter.get('/', (req, res, next) => {
    res.send(escSpeeds);
});

// Created route for escSpeedRouter that'll send a escSpeed for a GET Request
escSpeedRouter.get('/:id', (req, res, next) => {
    const escSpeed = escSpeeds[req.params.id];
    if(escSpeed) {
        res.send(escSpeed);
    }
    else {
        res.status(404).send();
    }
});

module.exports = escSpeedRouter;