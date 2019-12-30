#!/bin/bash

# Install Node.js v10.x and npm
sudo apt install -y curl
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
nodejs -v

# react plugin used to create icons
#import { GiMovementSensor } from "react-icons/gi";
