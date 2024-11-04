set -e

sudo apt install npm
npm install .
npm list
npm test