let friends = require("../data/friends.js");
module.exports = function (app) {
    //build json route with possible friends
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function (req, res) {

        console.log(req.body);


        let userScore = [
            +req.body.ques1,
            +req.body.ques2,
            +req.body.ques3,
            +req.body.ques4,
            +req.body.ques5,
            +req.body.ques6,
            +req.body.ques7,
            +req.body.ques8,
            +req.body.ques9,
            +req.body.ques10,
        ];

        let closestMatch = 99;
        let matchFriend=0;
        for (let i = 0; i < friends.length; i++) {
            let currentMatch = getClosestMatch(userScore, friends[i].scores);
            if (currentMatch < closestMatch) {
                closestMatch = currentMatch
                matchFriend = i;
            }
        }
        const match = friends[matchFriend];
        res.json(match);

    });
}

// console.log(friends[matchFriend]);
function getClosestMatch(userScore, friendsScore) {
    let totaled = 0;
    for (let i = 0; i < userScore.length; i++) {
        totaled += Math.abs(userScore[i]) - Math.abs(friendsScore[i]);
    };
    console.log ( Math.abs(totaled));
    return Math.abs(totaled);

}
