
BrowserifyJS VS RequreJS
==============================
Start point for your experiments. Starting from closer look at popular module [ isolated and arbitrarily complex piece of code ] loaders BrowserifyJS and RequreJS. Checkout requirejs branch to see the difference.


BrowserifyJS (CommonJS)
------------------------------
[Browserify](http://browserify.org) lets you require('modules') in the browser by bundling up all of your dependencies.

RequreJS (AMD)
------------------------------
[RequireJS](http://requirejs.org) is a JavaScript file and module loader. It is optimized for in-browser use, but it can be used in other JavaScript environments, like Rhino and Node.

Pros & Cons of BrowserifyJS
------------------------------

### Pros (BrowserifyJS wins)
- Simple
- Node-style module exporting. More readable syntax [ ES6 alike ]
- NPM (168,872 packages as of Jul 27,2015)
- Multiple versions of the same dependency
- TTD (Unit-tests without browser)
- Larger and more active community
- Ability to create isomorphic applications


### Cons (RequreJS wins)
- No dynamic path aliases. Imposible to require('./path/'+ filename +'.js');
- No 'Lazy load'
- Must use a watcher tool for the builds.
- Documentation (Lots of things are assumed that you know already )

### Sourcemaps
Both RequireJS and Browserify have support for sourcemaps, which is of fundamental importance for the debugging of in production applications.


Alternative to investigate
==============================
- [Webpack](https://webpack.github.io/)
- [JSPM](http://jspm.io/)
- [Component](https://github.com/componentjs/component/)


More info
==============================
- [Comparison](https://webpack.github.io/docs/comparison.html)
- [Module loaders e package managers](http://www.leanpanda.com/blog/2015/06/28/amd-requirejs-commonjs-browserify/)
- [Isomorphic JavaScript](http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/)
