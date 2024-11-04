set -e

sudo apt install npm
npm install web-ext
npm install .
npm list

mocha tests