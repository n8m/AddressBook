'use strict';

describe('AddressBook', function() {
	beforeEach(function() {
		module('AddressBook');
	});

	describe('AddressBookCtrl tests', function() { 

		var scope, ctrl;

		beforeEach(function() {
			inject(function($rootScope, $controller) {
				scope = $rootScope.$new();    
				ctrl = $controller("AddressBookCtrl", {
					$scope: scope
				})
			})
		});


		it('should create Addresses array with, length 2', function() {
			expect(scope.addresses.length).toBe(2);     
		})

		describe('FuncAdd', function() {

			beforeEach(function() {
				scope.newAddress = {
					name: 'testName'
				};
				scope.addAddress();
			});

			it('should check if length of addresses has changed', function() {
				expect(scope.addresses.length).toBe(3);  
			})

			it('should check if last address has needed name', function() {
				expect(scope.addresses[scope.addresses.length - 1].name).toBe('testName');  
			})
		});

		describe('FuncDel', function() {

			beforeEach(function() {
				scope.newAddress = {
					name: 'testName'
				};
				scope.addresses.push(scope.newAddress);
				scope.deleteAddress(scope.addresses.length - 1);
			});

			it('should check if length of addresses has changed', function() {
				expect(scope.addresses.length).toBe(2);
			})

			it('should check if name of the last address isn\'t just like deleted', function() {
				expect(scope.addresses[scope.addresses.length - 1].name).not.toBe('testName');
			})
		})

	})


});