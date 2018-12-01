# Weird-A.I.
This repository contains the hackathon project for team Weird AI, the group that earned third place at Globant's Hack the Now &amp; Next: The Future of Media.

## The Idea
Imagine you could automatically have the lyrics for a beautiful song written before your eyes. Using machine learning based in Python with TensorFlow, Weird A.I. built a working prototype of a system that is trained to generate lyrics in the style of Weird Al Yankovic. Tags can be used to direct the topic of a song, and the React-based front end is capable of fetching generated lyrics in quiz format to see if a user can tell a difference between "real" lyrics written by Weird Al and the "fake" lyrics crafted by Weird A.I.

## Demo
A demo that uses previously arrays of previously generated lyrics can be found below. Note that the lyrics were entirely made with our backend, and a nearly complete API can be found wthin this repository.

https://weird-ai-c3e96.firebaseapp.com/

> Note: we don't currently have the TensorFlow model backend running for live text generation.  But the demo above has a list of songs created by our 1st generation model.  Try typing in one of the following keywords to see some examples:
> * AI Revolution
> * Hackathon Blues
> * Coffee
> * Tech
> * Eat
> * Albatross
> * Globant
> * Kitchen

## Tech Stack
* Python
* TensorFlow
* C#
* React
* SCSS

## TODO
* Redo web-scrapping to include helpful annotations such as verse/chorus labels and end of line markers
* Retrain model on new lyrics database
* Tune new model, but if results are unsatisfactory:
 * Train a separate model for verses and one for choruses
 * Implement algorithm to assemble songs line-by-line pulling from the 2 separate models as appropriate

## Contributors
Jonathan Leack, Front End Developer - https://github.com/JonnyBeoulve

Ivan Sued, Back End Developer - https://github.com/thefenry

Nathaniel Watkins, Data Scientist - https://github.com/TheNathanielWatkins

Chelsey Lew, Designer - https://github.com/Aliandrita
