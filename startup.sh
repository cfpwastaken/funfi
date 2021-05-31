#!/bin/bash

cd /home/pi/funfi
git pull # Pull new Lists and updates
cp startup.sh ../startup.sh
cp startup.service /etc/systemd/system
bash run.sh
