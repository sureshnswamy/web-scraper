
# Scrapify

This is a personal project

## how
My learning objectives are to learn server - client setup using an API.
Extract data by HTML scraping and store in a database.

## test
Five tests written to check the API's get the correct data.
TDD

## API

 imdb-search uses a POST as a end point. This commmunicates with IMDB website and fetches the list of movie links and their poster images  on the search keyword.

 imdb-api uses a POST as end point to get for a particular movie url four elements title, release date, rating and poster image url.


## System Architecture

	Public(client)
	|
Server ==> IMDB-api
 |	|
 |	===> IMDB-search
 |
DB




