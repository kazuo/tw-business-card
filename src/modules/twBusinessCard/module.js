'use strict';

import 'angular';
import twBusinessCard from './directives/twBusinessCard';

angular.module('module.twBusinessCard', [])
	.directive('twBusinessCard', twBusinessCard);