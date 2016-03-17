'use strict';

import 'angular';
import twBusinessCard from './directives/twBusinessCard';

export default angular.module('twinwork.twBusinessCard', [])
    .directive('twBusinessCard', twBusinessCard);