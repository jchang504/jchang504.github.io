#!/bin/bash

# old version; required manual updating
#MAIN='index.html home-layout.css home-day.css home-night.css animateHome.js'
#IMG='img/favicon.png img/home-pics-white.jpg img/index.html'
#SCRABBLE='98-252/syllabus.pdf 98-252/index.html'
#scp $MAIN jemminc@unix.andrew.cmu.edu:www
#scp $IMG jemminc@unix.andrew.cmu.edu:www/img
#scp $SCRABBLE jemminc@unix.andrew.cmu.edu:www/98-252

# new version!
MAIN=$(ls live)
IMG=$(ls img/live)
SCRABBLE=$(ls 98-252/live)
cd live
scp $MAIN jemminc@unix.andrew.cmu.edu:www
cd ../img/live
scp $IMG jemminc@unix.andrew.cmu.edu:www/img
cd ../../98-252/live
scp $SCRABBLE jemminc@unix.andrew.cmu.edu:www/98-252
