const tickets = require("../controllers/tickets.js");
const request = require('request');

test('Testing individual ticket API',()=>{
  var url = "http://localhost:3000/tickets/1.json";
  request.get({
      url: url,
      headers:{
        "Accept": "application/json"
      }
    }, function(error, response, body){
      if(!error&&response.statusCode<400){
          expect(1).toStrictEqual(1);
      }else{
        throw new Error('Failed individual ticket API');
      }
    });
})

test('Testing fetch tickets API',()=>{
  var url = "http://localhost:3000/tickets";
  request.get({
      url: url,
      headers:{
        "Accept": "application/json"
      }
    }, function(error, response, body){
      if(!error&&response.statusCode<400){
          expect(1).toStrictEqual(1);
      }else{
        throw new Error('Failed fetching tickets');
      }
    });
})