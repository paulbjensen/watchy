'use strict';


var Twitter = require('twitter'); 
var config	= require('./config');

var client = new Twitter(config);


function search () {
	var formInput = window.document.querySelector('form input');
	client.stream('statuses/filter', {track: formInput.value},  function (stream) {
	  	stream.on('data', function(tweet) {
		    console.log(tweet.text);
	  	});

		stream.on('error', function(error) {
		    console.log(error);
	  	});
	});
	return false;
}