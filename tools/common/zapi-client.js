var Client = require("zapi_nodejs");

//set credentials
var BASE_URL = 'https://prod-play.zephyr4jiracloud.com/connect';
var ACCESS_KEY = 'YzQwM2U0ZGEtMmFlNi0zOTk1LThmZTctZjgyMWIwN2ZlMzY1IGFkbWluIFVTRVJfREVGQVVMVF9OQU1F';
var SECRET_KEY = 'kRMvt2wdbLUwTvSehuiz5hcRIxlQ0czOP80UHsublo4';
var USER = 'admin';

//create client
var JwtClient = new Client(BASE_URL, ACCESS_KEY, SECRET_KEY, USER);

var JWT_EXPIRE = 3600;	//in ms

var ZapiClient = {
	
	getToken: function(api_url, method) {

		//var API_URI = 'https://e30e2b02.ngrok.io/public/rest/api/1.0/config/generalinformation';

		var API_URI = BASE_URL + api_url;
		var token = JwtClient.generateJWT(method, API_URI, JWT_EXPIRE);
		return token;
	}
};

module.exports = ZapiClient;