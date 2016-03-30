var $ = require ('jquery')
var h = require ('hyperscript')


console.log('hello page')

$(document).ready(function(){
  $("#submit").click(function(){
    // $.post('/search', search, function(req,res){
	 //  $.getJSON("./data/movieList.json", function(data){
		// if(data) {
	 //    	var len = data.length
	 //    	console.log(len, 'here is movieList length')
		// 	var txt = ''
		// 		for(var i=0;i<len;i++){
	 //       			if(data[i].titleUrl && data[i].imgUrl){
	 //           		txt += "<tr><td>"+data[i].titleUrl+"</td><td>"+data[i].imgUrl+"</td></tr>";
	 //       			}
	 //   			}
	 //   		if(txt != ""){
	 //       		$("#table").append(txt).removeClass("hidden")
	 //   		}
	 //   	}
	  })
   
})