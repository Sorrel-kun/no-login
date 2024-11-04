set -e

sudo apt install npm
sudo npm install --global web-ext
sudo npm install -D .
sudo npm list

mocha tests