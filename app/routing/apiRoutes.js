var friendData = require("../data/friends");

var path = require('path');

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friendData);
  });


  app.post("/api/friends", function (req, res) {
    var newFriend = req.body;
    // friendData.push(newFriend);
    //res.json(newFriend);
    //for (let i = 0; i < friendData.length; i++) {
    //console.log(friendData[i].scores);  
    //}

    var match = 0;
    var minimumDifference = 40;

    for (let i = 0; i < friendData.length; i++) {
      var totalDifference = 0;
      for (let x = 0; x < friendData[i].scores.length; x++) {
        var difference = Math.abs(newFriend.scores[x] - friendData[i].scores[x])
        totalDifference += difference;

      }
      if (totalDifference < minimumDifference) {
        match = i;
        minimumDifference = totalDifference;
      }
    }
    friendData.push(newFriend);
    //console.log(friendData[match]);

    res.json(friendData[match]);
    
  })

}