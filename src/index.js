var $ = require ('jquery')
var h = require ('hyperscript')
var request = require('superagent')


console.log('updated table with format ')

var page = h('div#main',{},
			 	h('div#title',
					h( 'h1', 'Scrapify'),
					h('h2', 'Lets go scraping IMDB')
				),

				h('div#content', 
                   h('h2', 'search', {style: {'color': 'red'}} ),
                   h('textarea#txtsearch', 'Enter movie name here...', {style:{'cols':'25', 'rows':'1', 'class':'html-text-box', 'placeholder':'Enter movie name here...'}}),
                   // h('input#search', 'search', {style: {'height': '15px', 'width': '200px'}}),
                   h('button#search', 'search', {})
                 ),
				

				h('div#result', 
					h('table', {sytle:{'class':'hidden'}},
						h('caption', 'Movie search results links'),
	  					h('tr', h('th', 'Movie  Url'), h('th', 'Image')),
	  					h('tr',h('td'), h('td'))
					)
				)
			)
	    		

			

$(document).ready(function() {
	$('body').append($(page))
	
	// $('#result').hide()


	$('#search').click(function(){
		searchIMDB()
    	 $('#result').hide()
    })
})

function searchIMDB(){
	var str = $('#search').val()
	console.log(str)
	$('#table').append(str).show('#result')
// request
// 	.post('/search')

// 	.send(str)
// 	.end(function(err, res) {
// 		alert(res.text)
// 		var len = res.text()
// 		console.log( res, len, 'here is' +len+'number of search result')
// 		var txt = ''
// 		for(var i=0;i<len.length;i++){
// 	 		if(res[i].titleUrl && res[i].imgUrl){
// 	           	txt += "<tr><td>"+res[i].titleUrl+"</td><td>"+res[i].imgUrl+"</td></tr>";
// 	       	}
// 	   	}
// 		   	if(txt != ''){
// 		    	$('#table').append(txt).show('#result')
// 			}
// 	})

}



 