(function() {
  function CookiesCtrl($scope, $cookies, $uibModalInstance) {
    $scope.setUsername = function(username) {
      if (username !== undefined){
        $cookies.put('blocChatCurrentUser', username);
        $uibModalInstance.close();
      } else {
        alert("Your Name Please!!")
      }
    }
  }

  angular
    .module('blocChat')
    .controller('CookiesCtrl', ['$scope', '$cookies', 'uibModalInstance', CookiesCtrl]);
})();
