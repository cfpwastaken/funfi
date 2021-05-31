#!/bin/bash

echo " _____            _____ _ "
echo " |  ___|   _ _ __ |  ___(_)"
echo " | |_ | | | | '_ \| |_  | |"
echo " |  _|| |_| | | | |  _| | |"
echo " |_|   \__,_|_| |_|_|   |_|"
echo "                           "
echo "Funny Wifi Names!"
echo ""
echo "Making sure you are up to date..."
git pull

echo "Installing npm packages..."
npm i

echo "Please choose a language (de, en):"
read language

echo "LANG=$language" > .env

echo "Copying files..."
cp startup.sh ../startup.sh
sudo cp startup.service /etc/systemd/system/funfi.service

echo "Enabling service..."
sudo systemctl enable funfi

echo "Done!"
echo "FunFi will run on the next reboot."