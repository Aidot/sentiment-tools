var app = angular.module('formatApp', []);

app.controller('formatCtrl', function($scope) {

  $scope.initData = {
    when: 'Yesterday',
    feeling: 'Sadness',
    intensity: 5,
    trigger: 'Exam',
    behavior: 'Went cycling',
    thought: 'Will fail',
    consequence: 'Can\'nt sleep'
  };

  if (Storage !== void(0)) {
    $scope.formatData = localStorage.getItem('formData') !== null ? angular.fromJson(localStorage.getItem('formData')) : $scope.initData;
  } else {
    $scope.formatData = $scope.initData;
  }

  $scope.storage = function () {
    if (Storage !== void(0)) {
      localStorage.setItem('formData', angular.toJson($scope.formatData));
    }
  };

  $scope.update = function () {
    $scope.storage();
  };

});