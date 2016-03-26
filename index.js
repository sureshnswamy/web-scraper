var $ = require ('jquery')
var h = require ('hyperscript')



$('.submit').click(function() {
var tree = orangeTree()

$('.grove').append(
  h('div.search-result'),
  h('h2', 'search Result', { style: {'background-color': 'orange'} }),
 
})