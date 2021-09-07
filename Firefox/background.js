/*var enabled = true;
var req = new XMLHttpRequest();
req.overrideMimeType("application/json");
req.open('GET', 'https://fusionapps.netlify.app/data.json', true);
req.onload  = function() {
   var jsonResponse = JSON.parse(req.responseText);
   // do something with jsonResponse
   data_assigner(jsonResponse.blocked_domains);
};
req.send(null);

function data_assigner(arr) {
    blocked_domains = arr; 
};

var blocked_domains = blocked_domains; */
var enabled = true;
var blocked_domains = bg.concat(blocked_domain)
chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
		if(enabled) {
			console.log("blocking:", details.url);
		}
		return {cancel: enabled };
	},
	{urls: blocked_domains},
	["blocking"]
);

/*
var enabled = true;
var req = new XMLHttpRequest();
req.overrideMimeType("application/json");
req.open('GET', 'https://blockerdns.com/hosts-ads.json', true);
req.onload  = function() {
   var jsonResponse = JSON.parse(req.responseText);
   // do something with jsonResponse
   data_assigner(jsonResponse.blocked_domains);
};
req.send(null);

function data_assigner(arr) {
    blocked_domains = arr; 
};
var blocked_domains = blocked_domains; 
*/