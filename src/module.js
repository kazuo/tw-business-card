'use strict';

import 'angular';
import twBusinessCard from './directives/twBusinessCard';

return angular.module('module.twBusinessCard', [])
    .directive('twBusinessCard', twBusinessCard);