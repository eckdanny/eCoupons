'use strict';

angular.module('ecouponsApp')
  .filter('testFilter', [function () {
    return function (input) {
      return input.split('').reverse().join('');
    };
  }]);
