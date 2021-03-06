(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === ''){
      $uibModal.open({
        backdrop: 'static',
        animation: true,
        templateUrl: '../../templates/set-username.html',
        controller: 'CookiesCtrl',
        controllerAs: 'ctrl',
        size: 'medium'
        //Modal configuration object properties
      })
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
