'use strict';

import twBusinessCard from './directives/twBusinessCard';

export default function moduleTwBusinessCard(angular) {
    angular.module('module.twBusinessCard', [])
        .directive('twBusinessCard', twBusinessCard);
};