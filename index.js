class Obj {
	constructor() {
		this.bodyParser = require('body-parser')
		this.express = require('express')
		this.app = this.express()

		this.path = require('path');
		this.consign = require('consign');
		this.cookieParser = require('cookie-parser')
		this.expressSession = require('express-session')
		this.methodOverride = require('method-override')
	}
}

module.exports = new Obj
