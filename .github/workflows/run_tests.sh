set -e

sudo apt install npm
#npm install web-ext
npm install -g mocha
mocha --version
npm install .
npm list

mocha tests