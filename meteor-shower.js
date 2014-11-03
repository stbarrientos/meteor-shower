if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.player1.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.player2.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.player3.helpers({

  });

  Template.player1.events({
    'submit form': function (event) {
      event.preventDefault();
      var response = $("#p1").val();
      $("#history").prepend("<li>Interviewer: " + response + "</li>")
      $("input[type='text']").val("");
    }
  });

  Template.player2.events({
    'submit form': function (event) {
      event.preventDefault();
      var response = $("#p2").val();
      $("#history").prepend("<li>Interviewee: " + response + "</li>")
      $("input[type='text']").val("");
    }
  });

  Template.player3.events({
    'submit form': function(event) {
      event.preventDefault();
      var response = $("#p3").val();
      $("#history").prepend("<li>Moderator: " + response + "</li>")
      $("input[type='text']").val("");
    }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
