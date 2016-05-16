requirejs = require 'requirejs'

requirejs.config
    nodeRequire: require

requirejs ['express', 'routes/index'], (express, index) ->
    app = express()

    # Config
    app.set 'view engine', 'pug'
    app.set 'views', __dirname + '/views'

    # Static files
    app.use express.static __dirname + '/client'

    # Routes
    app.use '/', index

    app.listen 3000, ->
        console.log "Listening on port 3000"