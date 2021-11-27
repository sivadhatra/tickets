const request = require('request');

exports.getTicket = (req, res, next) => {
  const ticketId = req.params.ticketId;
  var url = "https://zccdhatra.zendesk.com/api/v2/tickets/"+ticketId;
  request.get({
    url: url,
    headers:{
      "Authorization": "Basic a2FydXR1cmkuZGhhdHJhQGdtYWlsLmNvbTpLU0R0YWhfMTk5NQ==",
      "Accept": "application/json"
    }
  }, function(error, response, body){
    if(!error&&response.statusCode<400){
      const obj = JSON.parse(body);
      var ticket = obj["ticket"];
      res.render('tickets/ticket-detail', {
        ticket: ticket,
        pageTitle: 'Zendesk ticket Viewer',
        path: '/'
      });
    }else{
      console.log(error);
      res.status(500);
      res.render('500',{
        pageTitle: 'Zendesk ticket Viewer',
        path: '/'
      });
    }
  });
};

exports.getIndex = (req, res, next) => {
  var pagination = req.params.pageId;
  //console.log("m printing something");
  if(!pagination){
    pagination=1;
  }
  if(isNaN(pagination)){
    res.redirect('/');
  }
  //console.log(pagination);
  var url = "https://zccdhatra.zendesk.com/api/v2/tickets";
  request.get({
    url: url,
    headers:{
      "Authorization": "Basic a2FydXR1cmkuZGhhdHJhQGdtYWlsLmNvbTpLU0R0YWhfMTk5NQ==",
      "Accept": "application/json"
    }
  }, function(error, response, body){
    if(!error&&response.statusCode<400){
      const obj = JSON.parse(body);
      var tickets = obj["tickets"];
      var prev = true;
      var next = true;
      if(pagination>1){
        prev=false;
      }
      //console.log("tickets length is "+tickets.length);
      if(25*pagination>=tickets.length){
        next=false;
      }
      if(25*pagination>tickets.length){
        res.redirect('/');
      }
      tickets = tickets.slice(25*(pagination-1),25*(pagination));
      res.render('tickets/index', {
        tickets: tickets,
        pageTitle: 'Zendesk ticket Viewer',
        path: '/',
        pagination: pagination,
        prev: prev,
        next: next
      });
    }else{
      console.log(error);
      res.status(500);
      res.render('500',{
        pageTitle: 'Zendesk ticket Viewer',
        path: '/'
      });
    }
  });
};