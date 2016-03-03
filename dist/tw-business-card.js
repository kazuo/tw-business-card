"bundle";
(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
define("modules/twBusinessCard/templates/tw-business-card.html!github:systemjs/plugin-text@0.0.4.js", [], function() {
  return "<div class=\"flipper\" ng-mouseenter=\"over = true\" ng-mouseleave=\"over = false\">\n    <div class=\"front\">\n        <div class=\"left-padding\"></div>\n        <div class=\"person-identity\">\n            <span class=\"name\">{{vm.contact.name}}</span>\n            <span class=\"title\">{{vm.contact.title}}</span>\n        </div>\n        <div class=\"person-contact\">\n            <span>{{vm.contact.email}}</span>\n            <span>{{vm.contact.phone}}</span>\n        </div>\n    </div>\n    <div class=\"back\">\n        <div class=\"one-liner\">{{vm.contact.oneLiner}}</div>\n    </div>\n</div>";
});

_removeDefine();
})();
System.register('modules/twBusinessCard/directives/twBusinessCard.js', ['modules/twBusinessCard/templates/tw-business-card.html!github:systemjs/plugin-text@0.0.4.js'], function (_export) {

    /**
     * @ngdoc directive
     * @name module.twBusinessCard.directive:twBusinessCard
     * @description An HTML element that generates a business card with a person's information
     * @returns {{restrict: string, scope: {}, template, controller: TwBusinessCardController, controllerAs: string, link: link}}
     */
    'use strict';

    var template;

    /**
     * @ngdoc property
     * @name $inject
     * @propertyOf module.twBusinessCard.controller:TwBusinessCardController
     * @description An array of components for dependency injection for the
     * {@link module.twBusinessCard.controller:TwBusinessCardController TwBusinessCardController} controller
     * @type {Array}
     */

    _export('default', twBusinessCard);

    function twBusinessCard() {
        return {
            restrict: 'E',
            scope: {
                contact: '=?'
            },
            template: template,
            controller: TwBusinessCardController,
            controllerAs: 'vm',
            link: function link(scope, elem, attrs, ctrl) {
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
     * @ngdoc controller
     * @name module.twBusinessCard.controller:TwBusinessCardController
     * @description A controller for the {@link module.twBusinessCard.directive:twBusinessCard twBusinessCard} directive
     */
    function TwBusinessCardController() {
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
         * @methodOf module.twBusinessCard.controller:TwBusinessCardController
         * @description Initializes the controller
         * @param {object} [data]
         */
        function initialize(data) {
            if (angular.isObject(data)) {
                vm.contact = data;
            }
        }
    }
    return {
        setters: [function (_modulesTwBusinessCardTemplatesTwBusinessCardHtmlGithubSystemjsPluginText004Js) {
            template = _modulesTwBusinessCardTemplatesTwBusinessCardHtmlGithubSystemjsPluginText004Js['default'];
        }],
        execute: function () {
            TwBusinessCardController.$inject = [];
        }
    };
});

System.register('modules/twBusinessCard/module.js', ['modules/twBusinessCard/directives/twBusinessCard.js'], function (_export) {
    'use strict';

    var twBusinessCard;
    return {
        setters: [function (_modulesTwBusinessCardDirectivesTwBusinessCardJs) {
            twBusinessCard = _modulesTwBusinessCardDirectivesTwBusinessCardJs['default'];
        }],
        execute: function () {
            _export('default', angular.module('module.twBusinessCard', []).directive('twBusinessCard', twBusinessCard));
        }
    };
});
