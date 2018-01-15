(function() {
  function Message($firebaseArray, $cookies) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function (roomId) {
      return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
      // .. logic for filtering messages
    };

    Message.send = function(newMessage, currentRoomId){
      message.$add({
          username: $cookies.get('blocChatCurrentUser'),
          content: newMessage,
          sendAt: Date.now(),
          roomId: currentRoomId
        });
      // send method logic
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
