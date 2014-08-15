#!/bin/bash

# IMPORTANT: run only from its own directory!

if ! cd ../../personal_website
then
  echo 'Wrong directory. Run this script from within its directory.'
  exit 1
fi
MAIN=$(find -maxdepth 1 -type f)
scp $MAIN jemminc@unix.andrew.cmu.edu:www
cd img
IMG=$(find -maxdepth 1 -type f)
scp $IMG jemminc@unix.andrew.cmu.edu:www/img
cd ../98-252
SCRABBLE=$(find -maxdepth 1 -type f)
scp $SCRABBLE jemminc@unix.andrew.cmu.edu:www/98-252
