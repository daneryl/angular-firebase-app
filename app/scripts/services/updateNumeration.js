'use strict';

angular.module('app')
.factory('updateNumeration', function(){

  var update_numeration = function(sections, parent) {
    var parent_number = '';

    if(parent && parent.number){
      parent_number = parent.number;
    }

    _(sections).each(function(section, index) {
      section.number = parent_number + (index+1).toString() + '.';
      update_numeration(section.sections, section);
    });
  };

  return function(sections) {
    update_numeration(sections);
  };
});
