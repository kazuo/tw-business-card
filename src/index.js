'use strict';

import 'angular';
import twBusinessCard from './directives/twBusinessCard';

export default angular.module('module.twBusinessCard', [])
    .directive('twBusinessCard', twBusinessCard);