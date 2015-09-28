'use strict';


var Twitter = require('twitter'); 
var config	= require('./config');
var term;
var client = new Twitter(config);


function notifyOfTweet (tweet) {
	new window.Notification('New tweet about ' + term, {
		icon: tweet.user.profile_image_url,
		body: tweet.text
	});
} 

function search () {
	var formInput = window.document.querySelector('form input');
	term = formInput.value;
	client.stream('statuses/filter', {track: term},  function (stream) {
	  	stream.on('data', notifyOfTweet);

		stream.on('error', function (error) {
		    console.log(error.message);
	  	});
	});
	return false;
}