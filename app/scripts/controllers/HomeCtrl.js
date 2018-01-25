(function() {
  function HomeCtrl($uibModal, Room, $cookies, Message){
    this.roomList = Room.all;
    this.messages = null;
    this.selectedRoom = null;
    this.currentRoom = null;
    this.currentUser = $cookies.get('blocChatCurrentUser');

    this.createRoom = function(){
      $uibModal.open({
        templateUrl: '../../templates/new-room-modal.html',
        controller: "ModalCtrl",
        controllerAs: "ctrl"
      });

    };
    this.selectRoom = function (room){
      this.selectedRoom = room;
      this.messages = Message.getByRoomId(room.$id);
    };

    this.sendMessage = function() {
      console.log(this.selectedRoom.$id);
      Message.add(this.newMessage, this.selectedRoom.$id);
      this.newMessage = "";
    };
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['$uibModal', 'Room', '$cookies', 'Message', HomeCtrl]);
})();
