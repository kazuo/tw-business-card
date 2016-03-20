'use strict';

import template from './../templates/tw-business-card.html!text';
import './../styles/styles.css!';

/**
 * @ngdoc directive
 * @name twinwork.twBusinessCard.directive:twBusinessCard
 * @description An HTML element that generates a business card with a person's information
 * @returns {{restrict: string, scope: {}, template, controller: TwBusinessCardController, controllerAs: string, link: link}}
 */
export default function twBusinessCard()
{
    return {
        restrict: 'E',
        scope: {
            contact: '=?'
        },
        template: template,
        controller: TwBusinessCardController,
        controllerAs: 'vm',
        link: function (scope, elem, attrs, ctrl) {
            elem.addClass('tw-business-card');
            ctrl.initialize(scope.contact);

            scope.$watch('over', function (over) {
                if (over) {
                    elem.addClass('hover');
                } else {
                    elem.removeClass('hover');
                }
            });
        }
    };
}

/**
 * @ngdoc property
 * @name $inject
 * @propertyOf twinwork.twBusinessCard.controller:TwBusinessCardController
 * @description An array of components for dependency injection for the
 * {@link twinwork.twBusinessCard.controller:TwBusinessCardController TwBusinessCardController} controller
 * @type {Array}
 */
TwBusinessCardController.$inject = [];

/**
 * @ngdoc controller
 * @name twinwork.twBusinessCard.controller:TwBusinessCardController
 * @description A controller for the {@link twinwork.twBusinessCard.directive:twBusinessCard twBusinessCard} directive
 */
function TwBusinessCardController()
{
    var vm = this;

    angular.extend(vm, {
        initialize: initialize,
        contact: {
            name: 'Name',
            title: 'Title',
            email: 'name@example.com',
            phone: '+1 (323) 555-1234',
            oneLiner: 'The back of the card'
        }
    });

    //////////////////////////////////////////////// controller methods ////////////////////////////////////////////////

    /**
     * @ngdoc method
     * @name initialize
     * @methodOf twinwork.twBusinessCard.controller:TwBusinessCardController
     * @description Initializes the controller
     * @param {object} [data]
     */
    function initialize(data)
    {
        if (angular.isObject(data)) {
            vm.contact = data;
        }
    }
}