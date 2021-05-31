#!/bin/bash

echo "Sorry to see you go!"
rm ../startup.sh
sudo systemctl disable funfi
rm /etc/systemd/system/funfi.service
echo "Everything gone. You can now delete this folder."
echo "):"