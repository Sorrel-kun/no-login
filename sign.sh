#!/bin/bash

set -e

if [ -z "$AMO_JWT_ISSUER" ]; then
  source /home/martin/Documents/Passwords/amo_creds.sh
fi

web-ext sign --api-key $AMO_JWT_ISSUER --api-secret $AMO_JWT_SECRET