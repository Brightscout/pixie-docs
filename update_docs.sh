#!/bin/bash
# Script downloads and updates the pxl docs file that is rendered.
#
# We chose to manually render this instead of automatically to prevent any unintended  updates
# from a bug  in the documentation parser pipeline.

curl -fSsL -o external/pxl_documentation.json https://storage.googleapis.com/pl-docs/pxl-docs.json
