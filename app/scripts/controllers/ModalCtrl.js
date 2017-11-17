(function() {
  function ModalCtrl($uibModalInstance, Room){
    this.ok = function() {
      Room.add(this.roomName);
      $uibModalInstance.close();

      // work with the this.roomName property.
      // this will talk to your Room service.
    };
    this.cancel = function(){
      $uibModalInstance.dismiss('cancel');
      // click cancel to terminate new room create and close prompt
    };
  }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl]);
})();
