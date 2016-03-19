'use strict';

import 'angular';
import 'angular-mocks';

describe('twBusinessCard directive without settings', function () {
    var element, isolate, scope;

    beforeEach(module('twinwork.twBusinessCard'));

    beforeEach(inject(function ($compile, $rootScope) {
        scope = $rootScope.$new();
        element = `<tw-business-card></tw-business-card>`;
        element = $compile(element)(scope);
        scope.$apply();
        isolate = element.isolateScope();
        $('body').empty().append(element);
    }));

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

describe('twBusinessCard directive with contact', function () {
    var element, isolate, scope;

    beforeEach(module('twinwork.twBusinessCard'));

    beforeEach(inject(function ($compile, $rootScope) {
        scope = $rootScope.$new();
        scope.testContact = {
            name: 'Jane Deaux',
            title: 'Officer Manager',
            email: 'jane.deaux@twinwork.net',
            phone: '+1 (323) 555-4321',
            oneLiner: ":)"
        };
        element = `<tw-business-card data-contact="testContact"></tw-business-card>`;
        element = $compile(element)(scope);
        scope.$apply();
        isolate = element.isolateScope();
    }));

    it('should initialize with testData', function () {
        expect(isolate.vm.contact.name).to.be.equal('Jane Deaux');
        expect(isolate.vm.contact.title).to.be.equal('Officer Manager');
        expect(isolate.vm.contact.email).to.be.equal('jane.deaux@twinwork.net');
        expect(isolate.vm.contact.phone).to.be.equal('+1 (323) 555-4321');
        expect(isolate.vm.contact.oneLiner).to.be.equal(':)');
    });
});