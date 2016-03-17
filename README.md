# tw-business-card
An Angular directive that creates a business card element

## Demo

A demo can be found at http://demos.twinwork.net/tw-business-card/

## Installation

Installation requires `jspm`:

```
npm install -g jspm
```

Then install `tw-business-card`

```
jspm install github:kazuo/tw-business-card
```

And in your app, simply import `twBusinessCard`

```
import 'angular';
import 'kazuo/tw-business-card';

angular.module('app', [
    'twinwork.twBusinessCard',
]).controller('DemoController', [function () {
  this.contacts = [
      {
          name: 'Neafevoc K. Marindale',
          title: 'Magician',
          email: 'neafevoc@twinwork.net',
          phone: '+1 (808) 867-5309',
          oneLiner: '"Watch this!"'
      },
      {
          name: 'Richard Winters',
          title: 'Captain',
          email: 'richard.d.winters@twinwork.net',
          oneLiner: "Hang tough"
      },
      {
          name: 'Johnny B. Good',
          title: 'Musician',
          email: 'johnny.b.good@twinwork.net',
          phone: '+1 (818) 555-1234',
          oneLiner: "Rock On!"
      },
      {
          name: 'Jane Deaux',
          title: 'Officer Manager',
          email: 'jane.deaux@twinwork.net',
          phone: '+1 (323) 555-4321',
          oneLiner: ":)"
      }
  ];
}]);
```

And in your HTML

```
<div class="container" ng-controller="DemoController as vm" ng-cloak>
    <tw-business-card ng-repeat="contact in vm.contacts" data-contact="contact"></tw-business-card>
</div>
```

## Development

Development requires `grunt`:

```
npm install -g grunt
```

Then to install the project:

```
npm install
```

To create a developer build for the project:

```
grunt build
```

There is no demo site in the source code of the project, so it's highly recommended to create a separate development
app to bootstrap `tw-business-card` by following the install instructions above. Once that's complete, you can run the 
following command that will copy the build folder into your dev app.

During development, point your web server to the `build` folder as its web root. Also for development, simply run 
`grunt` and the default task will build and watch your files. Alternatively, there is also a `grunt sync` option that
will build a `dist` version and watch for changes on the `twBusinessCard` module itself. The `grunt sync` task
optionally takes a `target` option for the `dist` folder:

```
grunt --target=./../my-other-app/packages/tw-business-card
```

It will copy the contents of the built `dist` folder into the target folder

A `grunt dist` command is also available to creating a distribution build of the project

