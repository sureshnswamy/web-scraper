var $ = require ('jquery')
var h = require ('hyperscript')
var request = require('superagent')


console.log('updated build ')

$(document).ready(function(){
 
	$("form#search").submit(function() {
	    request
		     .post('/search')
		     .send({search:data})
		     .end(function(err,res){

		     });

	    return false;
	})
})



 