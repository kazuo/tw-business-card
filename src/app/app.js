'use strict';

import 'angular';
import './../modules/twBusinessCard/module';

angular.module('app', [
    'module.twBusinessCard'
]).controller('DemoController', [function () {
    this.contacts = [
        {
            name: 'Rey E. Marin Jr.',
            title: 'Software Engineer',
            email: 'rey.marin@twinwork.net',
            phone: '+1 (626) 217-0117',
            oneLiner: '$ vagrant up'
        },
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

angular.element(document).ready(function () {
    angular.bootstrap(document, ['app']);
});