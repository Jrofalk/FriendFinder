var friendData = require("../data/friends");

var path = require('path');

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friendData);
  });


  app.post("/api/friends", function (req, res) {
    var newFriend = req.body;
    friendData.push(newFriend);
    res.json(newFriend);
    for (let i = 0; i < friendData.length; i++) {
      console.log(friendData[i].scores);
    }
  });
}