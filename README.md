# This is the vini-all-mod

Installer Some Modules for Development

Includes:
1. express (_in express_);
2. body-parser (_in bodyParser_);
3. app (_Express Instance_);
4. path (_in path_);
5. consign (_in consign_);
6. cookie-parser (_in cookieParser_);
7. express-session (_in expressSession_);
8. method-override (_in methodOverride_);
9. ejs (_only in Package.js_)

_Example using App:_

	const { app } = require('vini-all-mod')

	app.get('/', (req, res) => { res.send('Test npm') })

	app.listen(3000, () => console.log('Exec...'))
