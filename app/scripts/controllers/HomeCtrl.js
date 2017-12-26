(function() {
  function HomeCtrl($uibModal, Room, Message){
    this.roomList = Room.all;
    this.messages = null;
    this.selectedRoom = null;

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
    this.selectRoom = function (room){
      this.selectedRoom = room;
      this.messages = Message.getByRoomId(room.$id);
    };
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['$uibModal', 'Room', 'Message', HomeCtrl]);
})();
