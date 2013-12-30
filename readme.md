# bootstrap-source-map-example

A basic HTML page which references a CSS file (originally compiled from [https://github.com/less/less.js/issues/1050](Less) ) which has a corresponding [Source Map](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) file.

Less.js Github issue: https://github.com/less/less.js/issues/1050
Developing With Sass and Chrome DevTools: http://net.tutsplus.com/tutorials/html-css-techniques/developing-with-sass-and-chrome-devtools/

To create source maps:
````
npm install -g less
lessc --version #lessc 1.5.0 (LESS Compiler) [JavaScript]
lessc --source-map=bootstrap.map less/bootstrap.less less/bootstrap.css
````

Or:
````
npm install
grunt #Checkout the Gruntfile.js to see how Source Maps are produced.
````
