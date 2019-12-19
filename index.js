class Obj {
	constructor() {
		this.bodyParser = require('body-parser')
		this.express = require('express')
		this.app = this.express()
	}
}

module.exports = new Obj
