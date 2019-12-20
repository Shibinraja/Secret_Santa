const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const MongoDb = require("mongodb");

const MongoClient = MongoDb.MongoClient;
const URL = "mongodb://localhost:/27017";

app.use(cors());
app.use(bodyParser.json());

app.post('/Register', function (req ,res){
    MongoClient.connect(URL , function (err,client){
        
        if (err) throw err;
        
        var db = client.db('secret-santa')
        db.collection('Admin').insertOne(req.body , function(err , data ){
            if (err) throw err;

            console.log(data)
            res.status(200).json({Message :"Success"})

        });
        client.close();
    });
});



app.post('/Login', function (req, res) {

    MongoClient.connect(URL, function (err, client) {

        if (err) throw err;

        var db = client.db('secret-santa');
        var userEmail = {Email : req.body.Email };
        var userPass = {Password : req.body.Password };

        var dbResult = db.collection('Admin').findOne({ Email: req.body.Email });


        dbResult.then(function (userData) {

            if(userPass.Password == userData.Password ){
                res.json({

                    Message: "pass success"

                });
            }
            else{
                res.status(403).json({
                    "Message" : "pass incorrect"
                });
            }

        });
        client.close();

    });

});
            // bcrypt.compare(req.body.password, userData.password, function (err, hasResult) {
// {
//                 if (hasResult == true) {

//                     console.log(hasResult);

                    // res.json({

                    //     message: "pass success"

                    // });

//                 }

//                 else {

//                     res.status(403).json({

//                         message: "pass wrong"

//                     });

//                 }

//             });


        // });

        // dbResult.catch(function () {

        //     console.log("catch")

        // })

//     });

// });


app.listen(6050)

