(function() {
  function Message($firebaseArray, $cookies) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
      //filter the messages by roomId
      return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    };

    Message.add = function(newMessage, currentRoomId) {
      messages.$add({
        username: $cookies.get('blocChatCurrentUser'),
        content: newMessage,
        sendAt: Date.now(),
        roomId: currentRoomId
      });
    }


    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
