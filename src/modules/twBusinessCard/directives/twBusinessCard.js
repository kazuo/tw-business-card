'use strict';

import template from './../templates/tw-business-card.html!text';

/**
 * @ngdoc directive
 * @name module.twBusinessCard.directive:twBusinessCard
 * @description An HTML element that generates a business card with a person's information
 * @returns {{restrict: string, scope: {}, template, controller: TwBusinessCardController, controllerAs: string, link: link}}
 */
export default function twBusinessCard()
{
    return {
        restrict: 'EA',
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
 * @propertyOf module.twBusinessCard.controller:TwBusinessCardController
 * @description An array of components for dependency injection for the
 * {@link module.twBusinessCard.controller:TwBusinessCardController TwBusinessCardController} controller
 * @type {Array}
 */
TwBusinessCardController.$inject = [];

/**
 * @ngdoc controller
 * @name module.twBusinessCard.controller:TwBusinessCardController
 * @description A controller for the {@link module.twBusinessCard.directive:twBusinessCard twBusinessCard} directive
 */
function TwBusinessCardController()
{
    var vm = this;

    angular.extend(vm, {
        initialize: initialize
    });

    //////////////////////////////////////////////// controller methods ////////////////////////////////////////////////

    /**
     * @ngdoc method
     * @name initialize
     * @methodOf module.twBusinessCard.controller:TwBusinessCardController
     * @description Initializes the controller
     * @param {object} data
     */
    function initialize(data)
    {
        angular.extend(vm, data);
    }
}