"use strict";

let pkg 	= require("../../package.json");

module.exports = {
	app: {
	},

	db: {
		uri: 'mongodb://u4my0bcgukkjwvdpjplg:SoYdPuvdnn6DeKjwPnj6@bb4tktwup1pzjcz-mongodb.services.clever-cloud.com:27017/bb4tktwup1pzjcz?authSource=bb4tktwup1pzjcz&readPreference=primary&appname=MongoDB%20Compass&ssl=false'
		// uri: process.env.MONGO_URI || "mongodb://localhost/" + pkg.config.dbName,
		// options: {
		// 	user: process.env.MONGO_USERNAME || "",
		// 	pass: process.env.MONGO_PASSWORD || ""
		// }
	}
};


