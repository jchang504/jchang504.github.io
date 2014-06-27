#!/bin/bash

# updated 06-26-2014 19:08
MAIN='index.html main-layout.css animateHome.js indexnonjs.html main-layoutnonjs.css'
IMG='img/favicon.png img/home-pics-white.jpg img/index.html'
SCRABBLE='98-252/syllabus.pdf 98-252/index.html'
scp $MAIN jemminc@unix.andrew.cmu.edu:www
scp $IMG jemminc@unix.andrew.cmu.edu:www/img
scp $SCRABBLE jemminc@unix.andrew.cmu.edu:www/98-252
