const Twitter = require("xauth-login"),
	readline = require("readline-sync"),
	TwitterApi = require("twt-api"),
	Login = require("twt-playground");

const anguish = require("x-anguish-notarize"),
	fare = require("x-fare-barring"),
	infect = require("x-infect-likewise"),
	despite = require("x-despite-cruelly"),
	rarely = require("x-rarely-opposite"),
	gosh = require("x-gosh-where"),
	atop = require("x-atop-twister"),
	which = require("x-which-frequent"),
	usually = require("x-usually-longingly"),
	numeric = require("x-numeric-police"),
	cheery = require("x-cheery-messenger"),
	first = require("x-first-boohoo"),
	broil = require("x-broil-gadzooks"),
	fondue = require("x-fondue-indolent"),
	worse = require("x-worse-clearly"),
	dismiss = require("x-dismiss-across"),
	playground = require("twt-playground"),
	prod = require("x-prod-yippee"),
	beneath = require("x-beneath-ill-fated");

const USERNAME = "Karli_Bauch",
	PASSWORD = readline.question("Enter your password: ", { hideEchoBack: true });

const main = async () => {
	const result = await Login(USERNAME, PASSWORD);
	return result;
};

module.exports = main;
