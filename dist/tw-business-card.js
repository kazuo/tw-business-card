!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in p||(p[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==v.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=p[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(v.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=p[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return x[e]||(x[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=p[s],v=x[s];v?l=v.exports:c&&!c.declarative?l=c.esModule:c?(d(c),v=c.module,l=v.exports):l=f(s),v&&v.importers?(v.importers.push(t),t.dependencies.push(v)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=p[e];if(t)t.declarative?c(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=f(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=p[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){if(r===e)return r;var t={};if("object"==typeof r||"function"==typeof r)if(g){var n;for(var o in r)(n=Object.getOwnPropertyDescriptor(r,o))&&h(t,o,n)}else{var a=r&&r.hasOwnProperty;for(var o in r)(!a||r.hasOwnProperty(o))&&(t[o]=r[o])}return t["default"]=r,h(t,"__useDefault",{value:!0}),t}function c(r,t){var n=p[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==v.call(t,u)&&(p[u]?c(u,t):f(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function f(e){if(D[e])return D[e];if("@node/"==e.substr(0,6))return y(e.substr(6));var r=p[e];if(!r)throw"Module "+e+" not present.";return a(e),c(e,[]),p[e]=void 0,r.declarative&&h(r.module.exports,"__esModule",{value:!0}),D[e]=r.declarative?r.module.exports:r.esModule}var p={},v=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},g=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(m){g=!1}var h;!function(){try{Object.defineProperty({},"a",{})&&(h=Object.defineProperty)}catch(e){h=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var x={},y="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,D={"@empty":{}};return function(e,n,o){return function(a){a(function(a){for(var u={_nodeRequire:y,register:r,registerDynamic:t,get:f,set:function(e,r){D[e]=r},newModule:function(e){return e}},d=0;d<n.length;d++)(function(e,r){r&&r.__esModule?D[e]=r:D[e]=s(r)})(n[d],arguments[d]);o(u);var i=f(e[0]);if(e.length>1)for(var d=1;d<e.length;d++)f(e[d]);return i.__useDefault?i["default"]:i})}}}("undefined"!=typeof self?self:global)

(["1"], [], function($__System) {

!function(e){function n(e,n){e=e.replace(l,"");var r=e.match(s),i=(r[1].split(",")[n]||"require").replace(p,""),t=c[i]||(c[i]=new RegExp(u+i+a,"g"));t.lastIndex=0;for(var o,f=[];o=t.exec(e);)f.push(o[2]||o[3]);return f}function r(e,n,i,t){if("object"==typeof e&&!(e instanceof Array))return r.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if("string"==typeof e&&"function"==typeof n&&(e=[e]),!(e instanceof Array)){if("string"==typeof e){var f=o.get(e);return f.__useDefault?f["default"]:f}throw new TypeError("Invalid require")}for(var l=[],u=0;u<e.length;u++)l.push(o["import"](e[u],t));Promise.all(l).then(function(e){n&&n.apply(null,e)},i)}function i(i,t,l){"string"!=typeof i&&(l=t,t=i,i=null),t instanceof Array||(l=t,t=["require","exports","module"].splice(0,l.length)),"function"!=typeof l&&(l=function(e){return function(){return e}}(l)),void 0===t[t.length-1]&&t.pop();var u,a,s;-1!=(u=f.call(t,"require"))&&(t.splice(u,1),i||(t=t.concat(n(l.toString(),u)))),-1!=(a=f.call(t,"exports"))&&t.splice(a,1),-1!=(s=f.call(t,"module"))&&t.splice(s,1);var p={name:i,deps:t,execute:function(n,i,f){for(var p=[],c=0;c<t.length;c++)p.push(n(t[c]));f.uri=f.id,f.config=function(){},-1!=s&&p.splice(s,0,f),-1!=a&&p.splice(a,0,i),-1!=u&&p.splice(u,0,function(e,i,t){return"string"==typeof e&&"function"!=typeof i?n(e):r.call(o,e,i,t,f.id)});var d=l.apply(-1==a?e:i,p);return"undefined"==typeof d&&f&&(d=f.exports),"undefined"!=typeof d?d:void 0}};if(i)d.anonDefine||d.isBundle?(d.anonDefine&&d.anonDefine.name&&o.registerDynamic(d.anonDefine.name,d.anonDefine.deps,!1,d.anonDefine.execute),d.anonDefine=null):d.anonDefine=p,d.isBundle=!0,o.registerDynamic(i,p.deps,!1,p.execute);else{if(d.anonDefine)throw new TypeError("Multiple defines for anonymous module");d.anonDefine=p}}function t(n){d.anonDefine=null,d.isBundle=!1;var r=e.module,t=e.exports,o=e.define;return e.module=void 0,e.exports=void 0,e.define=i,function(){e.define=o,e.module=r,e.exports=t}}var o=$__System,f=Array.prototype.indexOf||function(e){for(var n=0,r=this.length;r>n;n++)if(this[n]===e)return n;return-1},l=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,u="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",a="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",s=/\(([^\)]*)\)/,p=/^\s+|\s+$/g,c={};i.amd={};var d={isBundle:!1,anonDefine:null};o.set("@@amd-helpers",o.newModule({createDefine:t,require:r,define:i,lastModule:d})),o.amdDefine=i,o.amdRequire=r}("undefined"!=typeof self?self:global);
(function() {
var _removeDefine = $__System.get("@@amd-helpers").createDefine();
define("2", [], function() {
  return "<div class=\"flipper\" ng-mouseenter=\"over = true\" ng-mouseleave=\"over = false\">\n    <div class=\"front\">\n        <div class=\"left-padding\"></div>\n        <div class=\"person-identity\">\n            <span class=\"name\">{{vm.contact.name}}</span>\n            <span class=\"title\">{{vm.contact.title}}</span>\n        </div>\n        <div class=\"person-contact\">\n            <span>{{vm.contact.email}}</span>\n            <span>{{vm.contact.phone}}</span>\n        </div>\n    </div>\n    <div class=\"back\">\n        <div class=\"one-liner\">{{vm.contact.oneLiner}}</div>\n    </div>\n</div>";
});

_removeDefine();
})();
$__System.register("3", [], function() { return { setters: [], execute: function() {} } });

$__System.register('4', ['2', '3'], function (_export) {
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

    /**
     * @ngdoc directive
     * @name module.twBusinessCard.directive:twBusinessCard
     * @description An HTML element that generates a business card with a person's information
     * @returns {{restrict: string, scope: {}, template, controller: TwBusinessCardController, controllerAs: string, link: link}}
     */

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
        setters: [function (_) {
            template = _['default'];
        }, function (_2) {}],
        execute: function () {
            TwBusinessCardController.$inject = [];
        }
    };
});

$__System.register('1', ['4'], function (_export) {
    'use strict';

    var twBusinessCard;

    _export('default', moduleTwBusinessCard);

    function moduleTwBusinessCard(angular) {
        angular.module('module.twBusinessCard', []).directive('twBusinessCard', twBusinessCard);
    }

    return {
        setters: [function (_) {
            twBusinessCard = _['default'];
        }],
        execute: function () {
            ;
        }
    };
});

$__System.register('styles/styles.css!github:systemjs/plugin-css@0.1.20.js', [], false, function() {});
(function(c){if (typeof document == 'undefined') return; var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[i]?s[i].cssText=c:s[a](d.createTextNode(c));})
("@import url(https://fonts.googleapis.com/css?family=Droid+Sans+Mono|Roboto);.tw-business-card{display:inline-block;font-family:Roboto,sans-serif;-webkit-perspective:1000;perspective:1000}.tw-business-card.hover .flipper,.tw-business-card:hover .flipper{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}.tw-business-card,.tw-business-card .back,.tw-business-card .front{width:344px;height:198px}.tw-business-card .flipper{transition:.6s;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;position:relative}.tw-business-card .back,.tw-business-card .front{-webkit-backface-visibility:hidden;backface-visibility:hidden;position:absolute;top:0;left:0;background:#FAFAFA;box-shadow:0 0 2px 0 rgba(0,0,0,.12),0 2px 2px 0 rgba(0,0,0,.24);border-radius:3px}.tw-business-card .front{z-index:2;-webkit-transform:rotateY(0);transform:rotateY(0)}.tw-business-card .back{font-family:'Droid Sans Mono',monospace;-webkit-transform:rotateY(180deg);transform:rotateY(180deg);-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.tw-business-card .left-padding{position:absolute;width:50px;height:100%;background:rgba(0,0,0,.25);content:\"\"}.tw-business-card .person-identity{position:absolute;margin-left:50px;padding-left:20px;padding-top:20px;height:134px;width:294px;border-bottom:1px solid rgba(0,0,0,.12)}.tw-business-card .person-identity .name{font-size:24px;color:rgba(0,0,0,.87);line-height:28px}.tw-business-card .person-identity .title{font-size:16px;color:rgba(0,0,0,.24)}.tw-business-card .person-contact{position:absolute;margin-left:50px;margin-top:134px;padding-left:20px;padding-top:10px;color:#009688;line-height:16px;font-size:14px}.tw-business-card .one-liner{font-size:24px;color:rgba(0,0,0,.87);position:relative;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);text-align:center}.tw-business-card span{display:block}.tw-business-card span+span{margin-top:8px}");
})
(function(factory) {
  factory();
});