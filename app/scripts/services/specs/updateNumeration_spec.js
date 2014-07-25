'use strict';

describe('Service: updateNumeration', function () {


  beforeEach(module('app'));

  var service;

  beforeEach(inject(function(updateNumeration) {
    service = updateNumeration;
  }));

  it('should add consecutive numeration on objects on the first level', function(){
    var sections = [{},{},{}];

    service(sections);

    expect(sections[0].number).toBe('1.');
    expect(sections[1].number).toBe('2.');
    expect(sections[2].number).toBe('3.');
  });

  it('should add consecutive numeration on objects on the second level', function(){
    var sections = [{sections:[{},{},{}]}];

    service(sections);

    expect(sections[0].sections[0].number).toBe('1.1.');
    expect(sections[0].sections[1].number).toBe('1.2.');
    expect(sections[0].sections[2].number).toBe('1.3.');
  });

});
