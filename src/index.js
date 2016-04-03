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
                   h('textarea#txtsearch',  {style:{'cols':'25', 'rows':'1', 'class':'html-text-box', 'placeholder':'Enter movie name here...'}}),
                   // h('input#search', 'search', {style: {'height': '15px', 'width': '200px'}}),
                   h('button#search', 'search', {})
                 ),
				

				h('div#result', 
					h('table', {sytle:{'class':'hidden'}},
						h('caption', 'Movie search results links'),
						h('tr', h('th', 'Movie  title'), h('th', 'Movie URL'), h('th', 'Image')),
						h('tbody#searchList')
	  				)
				)
			)
	    		

			

$(document).ready(function() {
	$('body').append($(page))
	
	$('#result').hide()


	$('#search').click(function(){
		var searchStr = $('#txtsearch').val()
		//console.log(searchStr)
		searchIMDB(searchStr)
    	 
    })
})

function searchIMDB(str){
	
	//alert(str)
	
request
	.post('/search')
	.send(str)
	.set('Accept', 'application/json')
	.end(function(err, res) {
		if (err) throw err
		//console.log(res.text, typeof res)
		var list = JSON.parse(res.text)
		var len= list.length
		console.log( list[0].titleUrl, typeof list, len, 'here is' +len+'number of search result')
		var txt = ''
		for(var i=0;i<len;i++){
	 		if(list[i].titleTxt && list[i].titleUrl){
	           	txt += "<tr><td>"+list[i].titleTxt+"</td><td>"+list[i].titleUrl+"</td><td><img src = ></td></tr>";
	       	}
	 	   	if(txt != ''){
	 	   		$('#result').show()
		    	$('#searchList').html(txt)
		    }
		}
	})

}



 