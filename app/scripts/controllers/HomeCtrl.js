(function() {
  function HomeCtrl($uibModal, Room){
    this.roomList = Room.all;

    this.createRoom = function(){
      $uibModal.open({
        // ariaLabelledBy: 'modal-title-top',
        // ariaDescribedBy: 'modal-body-top',
        templateUrl: '../../templates/new-room-modal.html',
        controller: "ModalCtrl",
        controllerAs: "ctrl"
      });

      // var nameOfRoom = prompt("Name Your Room");
      // Room.add (nameOfRoom);
    };
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['$uibModal', 'Room', HomeCtrl]);
})();
