'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('/app/index.html')
  });

  it('should show two list items', function() {
    expect(repeater('li').count()).toBe(2);
  });

  it('search filed should work', function() {
    input('search').enter('John');
    expect(repeater('li').count()).toBe(1);
  });

  it('should add item to list', function() {
    input('newAddress.name').enter('name');
    input('newAddress.phoneNumber').enter('123-45-67');
    element('input[type=submit]').click();
    expect(repeater('li').count()).toBe(3);
  })

  it('should not validate the entered data', function() {
    input('newAddress.surname').enter('surname');
    input('newAddress.phoneNumber').enter('123-45-67');
    element('input[type=submit]').click();
    expect(repeater('li').count()).toBe(2);
  })

  it('should remove item from list', function() {
    element('button.btn-danger:first').click();
    expect(repeater('li').count()).toBe(1);
  })

  it('should edit list item', function() {
    element('button.btn-default').click();
    input('address.name').enter('testName');
    element('input[type=submit]').click();
    expect(binding('address.name')).toEqual('testName');
  })


  // it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
  //   expect(browser().location().url()).toBe("/index.html");
  // });


  // describe('view1', function() {

  //   beforeEach(function() {
  //     browser().navigateTo('#/view1');
  //   });


  //   it('should render view1 when user navigates to /view1', function() {
  //     expect(element('[ng-view] p:first').text()).
  //       toMatch(/partial for view 1/);
  //   });

  // });


  // describe('view2', function() {

  //   beforeEach(function() {
  //     browser().navigateTo('#/view2');
  //   });


  //   it('should render view2 when user navigates to /view2', function() {
  //     expect(element('[ng-view] p:first').text()).
  //       toMatch(/partial for view 2/);
  //   });

  // });
});