const { app } = require('./index')

try {
	console.log(app)

} catch(e) {
	throw e.message
}
