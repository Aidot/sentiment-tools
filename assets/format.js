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

  $scope.showme = true;
  $scope.submit = function () {
    $scope.showme = !$scope.showme;
  }

});
// * Bot Assistant Q&A
app.controller('fbotCtrl', function ($scope) {
  $scope.questions = {
    1: 'When it happened?',
    2: 'Situation, Triggers?'
  };
  var i = 0;
  $scope.question = 'Hey, I’m a friendly bot. Please tell me what is on your mind so we can help you:)';
  $scope.talk = function () {
    if ($scope.say !='') {
      i ++
      $scope.question = $scope.questions[i];
      $scope.say = '';
    }
  };
});