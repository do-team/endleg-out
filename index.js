var AWS = require('aws-sdk');

exports.handler = (event, context, callback) => {

AWS.config.update({
  region: "eu-central-1",
  endpoint: "dynamodb.eu-central-1.amazonaws.com"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "endleg-main";
var user = "test";

var params = {
    TableName:table,
    Key:{
        "user": user
    }
};

console.log("Getting a new item...");
docClient.get(params, function(err, data) {
    if (err) {
        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 1));
    } else {
        console.log("GetItem succeeded:", JSON.stringify(data, null, 1));
    }
});

};