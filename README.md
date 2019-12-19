# This is the vini-all-mod

Installer Some Modules for Development

Includes:
1. express;
2. body-parser;
3. app _Express Instance_

_Example:_

	const { app } = require('vini-all-mod')

	app.get('/', (req, res) => { res.send('Test npm') })

	app.listen(3000, () => console.log('Exec...'))
