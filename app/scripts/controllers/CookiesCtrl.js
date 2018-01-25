(function() {
  function CookiesCtrl($scope, $cookies, $uibModalInstance) {
    this.ok = function() {
      if (this.username !== undefined){
        $cookies.put('blocChatCurrentUser', this.username);
        $uibModalInstance.close();
        window.location.reload();
      } else {
        alert("Your Name Please!!");
      }
    };
  }

  angular
    .module('blocChat')
    .controller('CookiesCtrl', ['$scope', '$cookies', '$uibModalInstance', CookiesCtrl]);
})();
