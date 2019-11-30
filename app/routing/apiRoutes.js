let friends = require("../data/friends.js");
module.exports = function (app) {
    //build json route with friends
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function (req, res) {

        console.log(req.body);
        // let matchGame = {
        //     name: "",
        //     photo: "",
        //     closetMatch: 99,
        // };

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
        let closetMatch = 99;
        let matchFriend = 0;
        for (let i = 0; i < friends.length; i++) {
            let currentMatch = getClosetMatch(userScore, friends[i].scores);
            if (currentMatch < closetMatch) {
                
                matchFriend = i;
            }
        }

        const match = friends[matchFriend];
        res.json(match);

    });

   
}

// console.log(friends[matchFriend]);
function getClosetMatch(userScore, friendsScore) {
let totaled = 0;
for (let i = 0; i < userScore.length; i++) {
    totaled += (userScore[i] < 0 ? userScore[i] * -1 : userScore[i]) < 0 ? friendsScore[i] * -1 : friendsScore[i];
}
return Math.abs(totaled)
}
