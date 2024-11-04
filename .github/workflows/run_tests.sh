set -e

sudo apt install npm
# npm install web-ext
npm install -g mocha
npm install --save-dev @babel/register
npm list @babel/register
npm install .
npm list

echo $PATH

npm test