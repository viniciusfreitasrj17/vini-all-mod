const { bodyParser, express, app } = require('./index')

try {
	app.use(bodyParser.urlencoded({ extended: true }))
	
	app.get('/', (req, res) => { res.send('Test get') })

	// app.listen(3000, () => console.log('Exe..'))

} catch(e) {
	throw e.message
}
