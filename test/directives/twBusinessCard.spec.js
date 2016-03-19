'use strict';

import 'angular';
import 'angular-mocks';

describe('twBusinessCard directive without settings', function () {
    var element, isolate, scope;

    beforeEach(module('twinwork.twBusinessCard'));

    beforeEach(inject(['$compile', '$rootScope', function ($compile, $rootScope) {
        scope = $rootScope.$new();
        element = `<tw-business-card></tw-business-card>`;
        element = $compile(element)(scope);
        scope.$apply();
        isolate = element.isolateScope();
    }]));

    it('should have an empty contact object by default', function () {
        expect(isolate.contact).to.be.empty;
    });

    it('should set a default contact', function () {
        expect(isolate.vm.contact.name).to.be.a('string');
        expect(isolate.vm.contact.title).to.be.a('string');
        expect(isolate.vm.contact.email).to.be.a('string');
        expect(isolate.vm.contact.phone).to.be.a('string');
        expect(isolate.vm.contact.oneLiner).to.be.a('string');
    });
});