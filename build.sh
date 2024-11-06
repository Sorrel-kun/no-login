#!/bin/bash

set -e

web-ext build --overwrite-dest --ignore-files demo martin readme misc package-lock.json release.sh build.sh store test coverage
