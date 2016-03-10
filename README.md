# tw-business-card
An Angular directive that creates a business card element

## Demo

A demo can be found at http://demos.twinwork.net/tw-business-card/


## Installation

To install, both `jspm` and `grunt` is required

```
npm install -g grunt
npm install -g jspm
```

Then to install the project:

```
npm install
```

To create a developer build for the project:

```
grunt build
```

During development, point your web server to the `build` folder as its web root. Also for development, simply run 
`grunt` and the default task will build and watch your files. Alternatively, there is also a `grunt sync` option that
will build a `dist` version and watch for changes on the `twBusinessCard` module itself. The `grunt sync` task
optionally takes a `target` option for the `dist` folder:

```
grunt --target=./../my-other-app/packages/tw-business-card
```

It will copy the contents of the built `dist` folder into the target folder

A `grunt dist` command is also available to creating a distribution build of the project

