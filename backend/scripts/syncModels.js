const User = require('../src/models/user')
User.sync({ force: true })