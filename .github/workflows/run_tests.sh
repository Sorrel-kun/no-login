set -e

sudo apt install npm
# npm install web-ext
npm install -g mocha
npm install .
npm list

mocha tests